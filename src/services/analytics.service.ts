import prisma from "../config/client";
import logger from "../config/logger";
import { ActiveSession, VisitorEvent } from "../types/global";
import { AnalyticsSummary, ServerToClientMessage } from "../websocket/types";
import { getWebSocketServer } from "../websocket/WebSocketServer";

const activeSessions = new Map<string, ActiveSession>();
const ALERT_TIMEFRAME_MS = 60 * 1000;
const SPIKE_THRESHOLD_WARNING = 25;
const SPIKE_THRESHOLD_INFO = 10;
const ALERT_COOLDOWN_MS = 5 * 60 * 1000;

let recentEventTimestamps: number[] = [];
let isAlertOnCooldown = false;

export async function processVisitorEvent(eventData: VisitorEvent):Promise<void> {
  try {
  
  const {id, sessionId, country, page,timestamp,metadata} = eventData;
  const eventTimestamp = new Date(timestamp);
  const today = new Date(timestamp);
  today.setUTCHours(0,0,0,0);

  const existingSession = await prisma.session.findUnique({
    where:{sessionId},
  });
  const newLastActivity = (existingSession && existingSession.lastActivity > eventTimestamp) ?
  existingSession.lastActivity
  : eventTimestamp;

  await prisma.session.upsert({
    where:{sessionId},
    create:{sessionId, country, device:metadata?.device,referrer: metadata?.referrer, startTime: eventTimestamp, lastActivity: eventTimestamp, isActive: true},
    update:{
      lastActivity: newLastActivity,
      isActive: true, 
      country
    },
  });
  await prisma.event.create({
    data:{id,sessionId, type: eventData.type, page, timestamp: eventTimestamp, metadata: metadata || {}},
  });
  await updatedDailyStats(today,page);
  updateInMemorySession(eventData);
  checkForSpikeAndAlert();
  } catch (error) {
    logger.error("Error processing visitor event:", error);
    throw error;
  }
}

function checkForSpikeAndAlert() {
  const now = Date.now();
  recentEventTimestamps.push(now);

  recentEventTimestamps = recentEventTimestamps.filter(
    (timestamp) => now - timestamp < ALERT_TIMEFRAME_MS
  );
  const visitorsLastMinute = recentEventTimestamps.length;

  if (isAlertOnCooldown) {
    return;
  }

  let alertToSend: ServerToClientMessage | null = null;
  if (visitorsLastMinute >= SPIKE_THRESHOLD_WARNING) {
    alertToSend = {
      type: "alert",
      data: {
        level: "warning",
        message: `High traffic warning! ${visitorsLastMinute} visitors in the last minute.`,
        details: {
          visitorsLastMinute: visitorsLastMinute,
          threshold: SPIKE_THRESHOLD_WARNING,
        },
      },
    };
  } else if (visitorsLastMinute >= SPIKE_THRESHOLD_INFO) {
    alertToSend = {
      type: "alert",
      data: {
        level: "info",
        message: `Visitor spike detected: ${visitorsLastMinute} visitors in the last minute.`,
        details: {
          visitorsLastMinute: visitorsLastMinute,
          threshold: SPIKE_THRESHOLD_INFO,
        },
      },
    };
  }

  if (alertToSend) {
    const wss = getWebSocketServer();
    wss.broadcast(alertToSend);
    isAlertOnCooldown = true;
    console.log(
      `Alert sent, Entering cooldown period for ${ALERT_COOLDOWN_MS / 1000}s.`
    );
    setTimeout(() => {
      isAlertOnCooldown = false;
      console.log("Alert cooldown period ended, ready to send new alerts.");
    }, ALERT_COOLDOWN_MS);
  }
}


async function updatedDailyStats(date: Date, page: string) {
  
    await prisma.dailyStats.upsert({
      where:{date},
      create:{date, totalPageViews: 1},
      update:{totalPageViews:{increment: 1}},
    });
    await prisma.pageStats.upsert({
      where:{page_date:{page, date}},
      create:{page, date, views: 1},
      update:{views:{increment: 1}},
    });
  } 

function updateInMemorySession({ id, sessionId, page, timestamp, country }: VisitorEvent) {
  const now = new Date(timestamp);
  let session = activeSessions.get(sessionId);
  if (!session) {
    console.log(`Creating new in-memory session for ${sessionId} from country: ${country}`);
    const newSession : ActiveSession = { id, sessionId, startTime: now, journey: [page], currentPage: page, duration: 0, lastActivity: now, country };
    activeSessions.set(sessionId, newSession);
    return;
  }
 
  // we only update properties on the existing session object
  session.id = id;
  session.country = country;
  session.currentPage = page;
  session.lastActivity = now;
  session.duration = Math.round((now.getTime() - session.startTime.getTime())/ 1000);
  if(session.journey[session.journey.length -1] !== page){
    session.journey.push(page);
  }
  activeSessions.set(sessionId, session);
  
}

export async function getAnalyticsSummary(): Promise<AnalyticsSummary> {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
const totalVisitorsTodayCount = await prisma.session.count({
  where:{
    lastActivity:{
      gte: today
    }
  }
});
const pageViews = await prisma.pageStats.findMany({
  where:{date: today},
  orderBy:{views:'desc'}
});
const pagesVisited = pageViews.reduce((acc, curr) => ({ ...acc,
  [curr.page]: curr.views
}),{});
return {
  totalActive: activeSessions.size,
  totalToday: totalVisitorsTodayCount,
  pagesVisited,
}
}

export function getActiveSessions() {
  return Array.from(activeSessions.values());
}

export function getSessionById(sessionId: string): ActiveSession | undefined {
  return activeSessions.get(sessionId);
}

export function cleanupInactiveSessions() {
  const INACTIVE_THRESHOLD_MS = 5 * 60 * 1000;
  const now = Date.now();

  let cleanedCount = 0;
  activeSessions.forEach((session, sessionId) => {
    if (now - session.lastActivity.getTime() > INACTIVE_THRESHOLD_MS) {
      activeSessions.delete(sessionId);
      prisma.session
        .update({
          where: { sessionId },
          data: {
            isActive: false,
          },
        })
        .catch(console.error);
    }
  });
  if (cleanedCount > 0) {
    logger.info(`Cleaned up ${cleanedCount} inactive sessions.`);
  }
}


export async function getFilteredEvents(filter: {
  country?: string;
  page?: string;
}) {
  const whereClause: any = {};
  if (filter.page) {
    whereClause.page = {
      contains: filter.page,
      mode: "insensitive",
    };
  }

  if (filter.country) {
    whereClause.session = {
      country: {
        equals: filter.country,
        mode: "insensitive",
      },
    };
  }
 return prisma.event.findMany({
    where: whereClause,
    orderBy: { timestamp: "desc" },
    take: 100,
    include: {
      session: {
        select: {
          country: true,
        },
      },
    },
  });
}
export async function getFilteredEventsForFrontend(filter: {
  country?: string;
  page?: string;
}): Promise<VisitorEvent[]> {
  const dbEvents = await getFilteredEvents(filter);
  return dbEvents.map((event) => ({
    id: event.id,
    sessionId: event.sessionId,
    page: event.page,
    country: event.session?.country || "N/A",
    timestamp: event.timestamp.toISOString(),
    type: event.type as "pageview" | "click",
  }));
}
export async function resetAllStats() {
  await prisma.$transaction([
    prisma.event.deleteMany(),
    prisma.session.deleteMany(),
    prisma.dailyStats.deleteMany(),
    prisma.pageStats.deleteMany(),
    prisma.countryStats.deleteMany(),
    prisma.alertLog.deleteMany(),
    prisma.dashboardActionLog.deleteMany(),
  ]);
  activeSessions.clear();
  logger.info("All analytics stats have been reset.");
}
