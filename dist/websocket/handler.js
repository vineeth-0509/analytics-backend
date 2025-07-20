"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const service = __importStar(require("../services/analytics.service"));
const logger_1 = __importDefault(require("../config/logger")); // Assuming you have a logger config
const client_1 = __importDefault(require("../config/client"));
function handleWebSocketMessage(ws, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const parsedMessage = JSON.parse(message);
            logger_1.default.info("Received WebSocket message from client:", parsedMessage);
            switch (parsedMessage.type) {
                case 'request_detailed_stats':
                    const filteredEvents = yield service.getFilteredEventsForFrontend(parsedMessage.filter);
                    const response = {
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
                    yield client_1.default.dashboardActionLog.create({
                        data: {
                            action: parsedMessage.action,
                            details: (parsedMessage.details || {})
                        },
                    });
                    break;
                default:
                    logger_1.default.warn("Unknown WebSocket message type:", parsedMessage.type);
                    break;
            }
        }
        catch (error) {
            logger_1.default.error("Error parsing WebSocket message:", error);
        }
    });
}
