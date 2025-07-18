import prisma from "../config/client";
import logger from "../config/logger";
import { ActiveSession, VisitorEvent } from "../types/global";

const activeSessions = new Map<string, ActiveSession>();

export async function processVisitorEvent(eventData: VisitorEvent) {
  try {
    const { sessionId, country, page, timeStamp, metadata } = eventData;
    const eventTimeStamp = new Date(timeStamp);
    const today = new Date(timeStamp);
    today.setUTCHours(0, 0, 0, 0);
    const isNewSession = !activeSessions.has(sessionId);

    const session = prisma.session.upsert({
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
    });
    const event = await prisma.event.create({
      data: {
        ...eventData,
        timeStamp: eventTimeStamp,
      },
    });
    await updateAggregateStats(today, country, page);

    updateInMemorySession(eventData);
    return { event, session };
  } catch (error) {
    logger.error("Error processing visitor event:", error);
    throw error;
  }
}

interface UpdateAggregateStatusParams {
    date: Date;
    country: string;
    page: string;
}

async function updateAggregateStats(
    date: Date,
    country: string,
    page: string
): Promise<void> {
    await prisma.$transaction([
        prisma.dailyStats.upsert({
            where: { date },
            create: { date, totalPageViews: 1, totalVisitors: 1, totalSessions: 1 },
            update: {
                totalPageViews: { increment: 1 }
            },
        }),

        prisma.pageStats.upsert({
            where: {
                page_date: { page, date }
            },
            create: {
                page, date, views: 1
            },
            update: {
                views: { increment: 1 }
            },
        }),
        prisma.countryStats.upsert({
            where: {
                country_date: { country, date }
            },
            create: { country, date, visitors: 1, sessions: 1 },
            update: { sessions: { increment: 1 } },
        }),
    ]);
}

function updateInMemorySession({
    sessionId,
    page,
    timeStamp,
}: {
    sessionId: string;
    page: string;
    timeStamp: string | number | Date;
}) {
    const now = new Date(timeStamp);
    let session = activeSessions.get(sessionId);

    if (!session) {
        session = {
            sessionId,
            startTime: now,
            journey: [],
            currentPage: page,
            duration: 0,
            lastActivity: now,
        };
    }
    session.currentPage = page;
    session.journey.push(page);
    session.lastActivity = now;
    session.duration = Math.round((now.getTime() - session.startTime.getTime()) / 1000);
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
