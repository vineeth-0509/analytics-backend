"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWebSocketMessage = handleWebSocketMessage;
const client_1 = __importDefault(require("../config/client"));
const logger_1 = __importDefault(require("../config/logger"));
function handleWebSocketMessage(ws, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedMessage = JSON.parse(message);
            logger_1.default.info("Recieved Websocket message from client:", parsedMessage);
            switch (parsedMessage.type) {
                case "track_dashboard_action":
                    yield client_1.default.dashboardActionLog.create({
                        data: {
                            action: parsedMessage.action,
                            details: parsedMessage.details || {},
                            createdAt: new Date(),
                        },
                    });
                    break;
                //   case "request_detailed_stats":{
                //     const filter = parsedMessage.filter as DetailedStatsFilter;
                //     logger.info("Detailed stats request received with filter:", filter);
                //     const fromDate = new Date(filter.from);
                //     const toDate = new Date(filter.to);
                //     let data;
                //     switch (filter.statsType) {
                //       case "daily":
                //         data = await prisma.dailyStats.findMany({
                //           where: {
                //             date: {
                //               gte: fromDate,
                //               lte: toDate,
                //             },
                //           },
                //           orderBy: { date: "asc" },
                //         });
                //         break;
                //       case "page":
                //         data = await prisma.pageStats.findMany({
                //           where: {
                //             date: {
                //               gte: fromDate,
                //               lte: toDate,
                //             },
                //             page: filter.page,
                //           },
                //           orderBy: [{ date: "asc" }, { page: "asc" }],
                //         });
                //         break;
                //       case "country":
                //         data = await prisma.countryStats.findMany({
                //           where: {
                //             date: {
                //               gte: fromDate,
                //               lte: toDate,
                //             },
                //             country: filter.country,
                //           },
                //           orderBy: [{ date: "asc" }, { country: "asc" }],
                //         });
                //         break;
                //       default:
                //         throw new Error(`Unsupported statsType: ${filter.statsType}`);
                //     }
                //     ws.send(JSON.stringify({
                //         type: 'detailed_stats_result',
                //         statsType: filter.statsType,
                //         data,
                //     }));
                //     break;
                // }
                case "request_detailed_stats":
                    const whereClause = {};
                    if (parsedMessage.filter.country) {
                        whereClause.session = { country: parsedMessage.filter.country };
                    }
                    if (parsedMessage.filter.page) {
                        whereClause.page = parsedMessage.filter.page;
                    }
                    //fetching detailed stats from the database
                    const filteredEvents = yield client_1.default.event.findMany({
                        where: whereClause,
                        orderBy: { timestamp: "desc" },
                        take: 50,
                        include: {
                            session: {
                                select: {
                                    country: true,
                                },
                            },
                        },
                    });
                    // response to the client
                    const response = {
                        type: 'detailed_stats_response',
                        data: {
                            filter: parsedMessage.filter,
                            events: filteredEvents,
                        },
                    };
                    ws.send(JSON.stringify(response));
                    break;
                default:
                    logger_1.default.warn("Unknown websocket message type:", parsedMessage.type);
            }
        }
        catch (error) {
            logger_1.default.error("Error parsing websocket message:", error);
        }
    });
}
