import prisma from "../config/client";
import logger from "../config/logger";
import { ActiveSession, VisitorEvent } from "../types/global";
import { ServerToClientMessage } from "../websocket/types";
import { getWebSocketServer } from "../websocket/WebSocketServer";

const activeSessions = new Map<string, ActiveSession>();
const ALERT_TIMEFRAME_MS = 60 * 1000;
const SPIKE_THRESHOLD_WARNING = 25;
const SPIKE_THRESHOLD_INFO = 10;
const ALERT_COOLDOWN_MS = 5 * 60 * 1000;

let recentEventTimestamps: number[] = [];
let isAlertOnCooldown = false;
// export async function processVisitorEvent(eventData: VisitorEvent) {
//   try {
//     const { sessionId, country, page, timestamp, metadata } = eventData;
//     const eventTimeStamp = new Date(timestamp);
//     const today = new Date(timestamp);
//     today.setUTCHours(0, 0, 0, 0);
//     const isNewSession = !activeSessions.has(sessionId);

//     const session = prisma.session.upsert({
//       where: { sessionId },
//       create: {
//         sessionId,
//         country,
//         device: metadata?.device,
//         referrer: metadata?.referrer,
//         startTime: eventTimeStamp,
//         lastActivity: eventTimeStamp,
//         isActive: true,
//       },
//       update: {
//         lastActivity: eventTimeStamp,
//         isActive: true,
//       },
//     });
//     const event = await prisma.event.create({
//       data: {
//        sessionId: eventData.sessionId,
//        type: eventData.type,
//        page: eventData.page,
//        timestamp: eventTimeStamp,
//        metadata : eventData.metadata || {},
//       },
//     });
//     await updateAggregateStats(today, country, page, isNewSession);

//     updateInMemorySession(eventData);
//     return { event, session };
//   } catch (error) {
//     logger.error("Error processing visitor event:", error);
//     throw error;
//   }
// }
export async function processVisitorEvent(eventData: VisitorEvent) {
  try {
    const { sessionId, country, page, timestamp, metadata, type } = eventData;
    const eventTimeStamp = new Date(timestamp);
    if (isNaN(eventTimeStamp.getTime())) {
      throw new Error(`Invalid timestamp provided: ${timestamp}`);
    }
     const today = new Date(timestamp);
    today.setUTCHours(0, 0, 0, 0);
    const isNewSession = !activeSessions.has(sessionId);
    const visitorIncrement = isNewSession ? 1 : 0;

    const [session, event] = await prisma.$transaction([
     
      prisma.session.upsert({
        where: { sessionId },
        create: {
          sessionId,
          country,
          device: metadata?.device,
          referrer: metadata?.referrer,
          startTime: eventTimeStamp,
          lastActivity: eventTimeStamp,
          isActive: true,
        },
        update: {
          lastActivity: eventTimeStamp,
          isActive: true,
        },
      }),

      
      prisma.event.create({
        data: {
          sessionId:sessionId,
          type: type,
          page: page,
          timestamp: eventTimeStamp, 
          metadata: metadata || {},
        },
      }),

      prisma.pageStats.upsert({
        where: { page_date: { page, date: today } },
        create: { page, date: today, views: 1, uniqueViews: 1 },
        update: { views: { increment: 1 }, uniqueViews: { increment: visitorIncrement } },
      }),
          prisma.countryStats.upsert({
          where: { country_date: { country, date: today } },
        create: { country, date: today, visitors: 1, sessions: 1 },
        update: { visitors: { increment: visitorIncrement }, sessions: { increment: visitorIncrement } },
      }),
    ]);
   
    await updatedDailyStats(today, visitorIncrement);
    updateInMemorySession(eventData);
    checkForSpikeAndAlert();
    return { event, session };
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

  if(isAlertOnCooldown) {
    return;
  }

  let alertToSend: ServerToClientMessage | null = null;
  if(visitorsLastMinute >= SPIKE_THRESHOLD_WARNING){
    alertToSend = {
      type:'alert',
      data:{
        level:'warning',
        message:`High traffic warning! ${visitorsLastMinute} visitors in the last minute.`,
        details:{
          visitorsLastMinute: visitorsLastMinute,
          threshold:SPIKE_THRESHOLD_WARNING,
        },
      },
   };
  }else if (visitorsLastMinute >= SPIKE_THRESHOLD_INFO){
    alertToSend = {
      type:'alert',
      data:{
        level:'info',
        message:`Visitor spike detected: ${visitorsLastMinute} visitors in the last minute.`,
        details:{
          visitorsLastMinute: visitorsLastMinute,
          threshold:SPIKE_THRESHOLD_INFO,
        }
      }
    };
  }

  if(alertToSend){
    const wss = getWebSocketServer();
    wss.broadcast(alertToSend);
    isAlertOnCooldown = true;
    console.log(`Alert sent, Entering cooldown period for ${ALERT_COOLDOWN_MS / 1000}s.`);
    setTimeout(()=>{
      isAlertOnCooldown = false;
      console.log("Alert cooldown period ended, ready to send new alerts.");
    }, ALERT_COOLDOWN_MS);
  }
}

// async function updateAggregateStats(
//     date: Date,
//     country: string,
//     page: string,
//     isNewSession: boolean
// ): Promise<void> {
//     const visitorIncrement = isNewSession ? 1: 0;
//     await prisma.$transaction([
//         prisma.dailyStats.upsert({
//             where: { date },
//             create: { date, totalPageViews: 1, totalVisitors: 1, totalSessions: 1 },
//             update: {
//                 totalPageViews: { increment: 1 },
//                 totalVisitors:{increment: visitorIncrement},
//                 totalSessions:{increment: visitorIncrement},
//             },
//         }),

//         prisma.pageStats.upsert({
//             where: {
//                 page_date: { page, date }
//             },
//             create: {
//                 page, date, views: 1, uniqueViews: 1
//             },
//             update: {
//                 views: { increment: 1 },
//                 uniqueViews:{increment: visitorIncrement}
//             },
//         }),
//         prisma.countryStats.upsert({
//             where: {
//                 country_date: { country, date }
//             },
//             create: { country, date, visitors: 1, sessions: 1 },
//             update: {
//                 visitors:{increment: visitorIncrement},
//                 sessions: { increment: visitorIncrement } },
//         }),
//     ]);
//     if (isNewSession) {
//         const uniqueCountryCount = await prisma.countryStats.count({
//             where: { date },
//         });
//         await prisma.dailyStats.update({
//             where: { date },
//             data: { uniqueCountries: uniqueCountryCount },
//         });
//     }
// }
async function updatedDailyStats(date: Date, visitorIncrement: number) {
    const uniqueCountryCount = await prisma.countryStats.count({ where: { date } });
    await prisma.dailyStats.upsert({
        where: { date },
        create: { date, totalPageViews: 1, totalVisitors: 1, totalSessions: 1, uniqueCountries: uniqueCountryCount },
        update: {
            totalPageViews: { increment: 1 },
            totalVisitors: { increment: visitorIncrement },
            totalSessions: { increment: visitorIncrement },
            uniqueCountries: uniqueCountryCount,
        },
    });
}

function updateInMemorySession(eventData: VisitorEvent) {
    const {sessionId, page, timestamp, country} = eventData;
    const now = new Date(timestamp);
    const existingSession = activeSessions.get(sessionId);

    // if (!session) {
    //     session = {
    //         sessionId,
    //         startTime: now,
    //         journey: [],
    //         currentPage: page,
    //         duration: 0,
    //         lastActivity: now,
    //     };
    // }
    // session.currentPage = page;
    // session.journey.push(page);
    // session.lastActivity = now;
    // session.duration = Math.round((now.getTime() - session.startTime.getTime()) / 1000);
     
    // if (!existingSession) {
    //     session = {
    //         sessionId, country, currentPage: page, journey: [page],
    //         startTime: now, lastActivity: now, duration: 0,
    //     };
    //     activeSessions.set(sessionId, session);
    // } else {
    //     session.currentPage = page;
    //     if(session.journey[session.journey.length-1] !== page) session.journey.push(page);
    //     session.lastActivity = now;
    //     session.duration = Math.round((now.getTime() - session.startTime.getTime()) / 1000);
    // }

    if(existingSession){
        existingSession.lastActivity = now;
        existingSession.currentPage = page;
        if(existingSession.journey[existingSession.journey.length - 1] !== page){
            existingSession.journey.push(page);
        }
        existingSession.duration = Math.round((existingSession.lastActivity.getTime() - 
        existingSession.startTime.getTime()) / 1000);
    }else {
        const newSession:ActiveSession = {
            sessionId: sessionId,
            country: country,
            currentPage: page,
            journey:[page],
            lastActivity: now,
            startTime: now,
            duration: 0
        };
        activeSessions.set(sessionId, newSession);
    }

}

export async function getAnalyticsSummary(){
    const today = new Date();
    today.setUTCHours(0,0,0,0);
    const stats = await prisma.dailyStats.findUnique({
        where:{
            date: today
        },
    });
    const pageViews = await prisma.pageStats.findMany({
        where:{
            date: today
        },
        orderBy: {views: 'desc'}
    })

    const pagesVisited = pageViews.reduce((acc, curr) => {
        acc[curr.page] = curr.views;
        return acc;
    }, {} as Record<string, number>);
    return {
        totalActive: activeSessions.size,
        totalToday: stats?.totalVisitors || 0,
        pagesVisited,
    }
}

export function getActiveSessions(){
    return Array.from(activeSessions.values());
}

export function cleanupInactiveSessions() {
  const INACTIVE_THRESHOLD_MS = 5 * 60 * 1000;
  const now = Date.now();
//   activeSessions.forEach((session, sessionId) => {
//     if (now - session.lastActivity.getTime() > INACTIVE_THRESHOLD_MS) {
//       activeSessions.delete(sessionId);
//       prisma.session
//         .update({
//           where: {
//             sessionId: sessionId,
//           },
//           data: {
//             isActive: false,
//           },
//         })
//         .catch((err: unknown) =>
//           logger.error(`Failed to mark session ${sessionId} as inactive`, err)
//         );
//     }
//   });
let cleanedCount = 0;

    for (const [sessionId, sessionData] of activeSessions.entries()) {
        if (now - sessionData.lastActivity.getTime() > INACTIVE_THRESHOLD_MS) {
            activeSessions.delete(sessionId);
            // Optional update the database to mark session as inactive
            prisma.session.update({
                where: { sessionId },
                data: { isActive: false },
            }).catch(err => logger.error(`Failed to mark session ${sessionId} as inactive:`, err));
            cleanedCount++;
        }
    }
    if (cleanedCount > 0) {
        logger.info(`Cleaned up ${cleanedCount} inactive sessions.`);
    }
}

export async function getFilteredEvents(filter:{country: string; page?: string}){
  const whereClause: any = {};
  if(filter.page){
    whereClause.page = {
      contains: filter.page, 
      mode:'insensitive'
    }
  }
  if(filter.country){
    whereClause.sesssion = {
      country:{equals: filter.country, mode:'insensitive'}
    };
  }

  return prisma.event.findMany({
    where: whereClause,
    orderBy:{timestamp:'desc'},
    take: 50,
    select:{
      id: true,
      type: true,
      page: true,
      timestamp: true,
      sessionId: true
    },
  });
}


export async function resetAllStats(){
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