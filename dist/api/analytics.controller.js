"use strict";
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
exports.handleNewEvent = handleNewEvent;
exports.getSummary = getSummary;
exports.getSessions = getSessions;
const analyticsService = __importStar(require("../services/analytics.service"));
const WebSocketServer_1 = require("../websocket/WebSocketServer");
const logger_1 = __importDefault(require("../config/logger"));
function handleNewEvent(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventData = req.body;
        if (!eventData.type || !eventData.sessionId || !eventData.page) {
            return res.status(400).json({ message: 'Missing required event fields.' });
        }
        try {
            yield analyticsService.processVisitorEvent(eventData);
            const wss = (0, WebSocketServer_1.getWebSocketServer)();
            const summary = yield analyticsService.getAnalyticsSummary();
            const sessionActivity = analyticsService.getActiveSessions().find(s => s.sessionId = eventData.sessionId);
            wss.broadcast({
                type: "visitor_update",
                data: { event: eventData, stats: summary }
            });
            if (sessionActivity) {
                wss.broadcast({ type: "session_activity", data: sessionActivity });
            }
            res.status(202).json({ message: "Event received" });
        }
        catch (error) {
            logger_1.default.error('Error in handleNewEvent controller:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    });
}
function getSummary(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const summary = yield analyticsService.getAnalyticsSummary();
            res.status(200).json(summary);
        }
        catch (error) {
            logger_1.default.error('Error fetching summmary:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    });
}
function getSessions(req, res) {
    try {
        const sessions = analyticsService.getActiveSessions();
        res.status(200).json(sessions);
    }
    catch (error) {
        logger_1.default.error('Error fetching sessions:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}
