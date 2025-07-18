import prisma from "../config/client";
import logger from "../config/logger";
import { WebSocket } from "ws";
interface DetailedStatsFilter {
  statsType: "daily" | "page" | "country";
  from: string;
  to: string;
  page?: string;
  country?: string;
}

export async function handleWebSocketMessage(ws: WebSocket, message: string) {
  try {
    const parsedMessage = JSON.parse(message);
    logger.info("Recieved Websocket message from client:", parsedMessage);
    switch (parsedMessage.type) {
      case "track_dashboard_action":
        await prisma.dashboardActionLog.create({
          data: {
            action: parsedMessage.action,
            details: parsedMessage.details || {},
            createdAt: new Date(),
          },
        });
        break;

      case "request_detailed_stats":{
        const filter = parsedMessage.filter as DetailedStatsFilter;
        logger.info("Detailed stats request received with filter:", filter);
        const fromDate = new Date(filter.from);
        const toDate = new Date(filter.to);
        let data;
        switch (filter.statsType) {
          case "daily":
            data = await prisma.dailyStats.findMany({
              where: {
                date: {
                  gte: fromDate,
                  lte: toDate,
                },
              },
              orderBy: { date: "asc" },
            });
            break;

          case "page":
            data = await prisma.pageStats.findMany({
              where: {
                date: {
                  gte: fromDate,
                  lte: toDate,
                },
                page: filter.page,
              },
              orderBy: [{ date: "asc" }, { page: "asc" }],
            });
            break;

          case "country":
            data = await prisma.countryStats.findMany({
              where: {
                date: {
                  gte: fromDate,
                  lte: toDate,
                },
                country: filter.country,
              },
              orderBy: [{ date: "asc" }, { country: "asc" }],
            });
            break;

          default:
            throw new Error(`Unsupported statsType: ${filter.statsType}`);
        }
        ws.send(JSON.stringify({
            type: 'detailed_stats_result',
            statsType: filter.statsType,
            data,
        }));
        break;
    }
      default:
        logger.warn("Unknown websocket message type:", parsedMessage.type);
    }
  } catch (error) {
    logger.error("Error parsing websocket message:", error);
  }
}
