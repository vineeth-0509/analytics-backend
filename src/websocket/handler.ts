// import prisma from "../config/client";
// import logger from "../config/logger";
// import { WebSocket } from "ws";
// import { ClientToServerMessage, ServerToClientMessage } from "./types";
// interface DetailedStatsFilter {
//   statsType: "daily" | "page" | "country";
//   from: string;
//   to: string;
//   page?: string;
//   country?: string;
// }

// export async function handleWebSocketMessage(ws: WebSocket, message: string) {
//   try {
//     const parsedMessage: ClientToServerMessage = JSON.parse(message);
//     logger.info("Recieved Websocket message from client:", parsedMessage);
//     switch (parsedMessage.type) {
//       case "track_dashboard_action":
//         await prisma.dashboardActionLog.create({
//           data: {
//           action: parsedMessage.action,
//           details:parsedMessage.details || {},
//           },
//         });
//         break;

     
//       case "request_detailed_stats":
//         const whereClause: any = {};
//         if (parsedMessage.filter.country) {
//           whereClause.session = { country: parsedMessage.filter.country };
//         }
//         if (parsedMessage.filter.page) {
//           whereClause.page = parsedMessage.filter.page;
//         }

//         //fetching detailed stats from the database
//         const filteredEvents = await prisma.event.findMany({
//           where: whereClause,
//           orderBy: { timestamp: "desc" },
//           take: 50,
//           include: {
//             session: {
//               select: {
//                 country: true,
//               },
//             },
//           },
//         });
//         // response to the client
//         const response: ServerToClientMessage = {
//           type: "detailed_stats_response",
//           data: {
//             filter: parsedMessage.filter,
//             events: filteredEvents,
//           },
//         };
//         ws.send(JSON.stringify(response));
//         break;

//       default:
//         logger.warn("Unknown websocket message type:", parsedMessage.type);
//     }
//   } catch (error) {
//     logger.error("Error parsing websocket message:", error);
//   }
// }

// /src/websocket/handlers.ts

import { WebSocket } from 'ws';

import * as service from '../services/analytics.service';
import { ClientToServerMessage, ServerToClientMessage } from './types';
import logger from '../config/logger'; // Assuming you have a logger config
import prisma from '../config/client';
import { Prisma } from '@prisma/client';

export async function handleWebSocketMessage(ws: WebSocket, message: string): Promise<void> {
  try {
    const parsedMessage: ClientToServerMessage = JSON.parse(message);
    logger.info("Received WebSocket message from client:", parsedMessage);

    switch (parsedMessage.type) {
      
      
      case 'request_detailed_stats':
       
        const filteredEvents = await service.getFilteredEventsForFrontend(parsedMessage.filter);
        const response: ServerToClientMessage = {
          type: "detailed_stats_response",
          data: {
            filter: parsedMessage.filter,
            results: filteredEvents, // Use 'results' to match the frontend hook
          },
        };

        // 3. Send the clean data back to the client.
        ws.send(JSON.stringify(response));
        break;

      /**
       * Handles tracking user actions within the dashboard.
       */
      case 'track_dashboard_action':
        await prisma.dashboardActionLog.create({
          data: {
            action: parsedMessage.action,
            details: (parsedMessage.details || {}) as Prisma.InputJsonValue
           
          },
        });
        break;

      default:
        logger.warn("Unknown WebSocket message type:", (parsedMessage as any).type);
        break;
    }
  } catch (error) {
    logger.error("Error parsing WebSocket message:", error);
  }
}