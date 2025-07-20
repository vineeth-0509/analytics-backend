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
exports.processVisitorEvent = processVisitorEvent;
exports.getAnalyticsSummary = getAnalyticsSummary;
exports.getActiveSessions = getActiveSessions;
exports.getSessionById = getSessionById;
exports.cleanupInactiveSessions = cleanupInactiveSessions;
exports.getFilteredEvents = getFilteredEvents;
exports.getFilteredEventsForFrontend = getFilteredEventsForFrontend;
exports.resetAllStats = resetAllStats;
const client_1 = __importDefault(require("../config/client"));
const logger_1 = __importDefault(require("../config/logger"));
const WebSocketServer_1 = require("../websocket/WebSocketServer");
const activeSessions = new Map();
const ALERT_TIMEFRAME_MS = 60 * 1000;
const SPIKE_THRESHOLD_WARNING = 25;
const SPIKE_THRESHOLD_INFO = 10;
const ALERT_COOLDOWN_MS = 5 * 60 * 1000;
let recentEventTimestamps = [];
let isAlertOnCooldown = false;
function processVisitorEvent(eventData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id, sessionId, country, page, timestamp, metadata } = eventData;
            const eventTimestamp = new Date(timestamp);
            const today = new Date(timestamp);
            today.setUTCHours(0, 0, 0, 0);
            const existingSession = yield client_1.default.session.findUnique({
                where: { sessionId },
            });
            const newLastActivity = (existingSession && existingSession.lastActivity > eventTimestamp) ?
                existingSession.lastActivity
                : eventTimestamp;
            yield client_1.default.session.upsert({
                where: { sessionId },
                create: { sessionId, country, device: metadata === null || metadata === void 0 ? void 0 : metadata.device, referrer: metadata === null || metadata === void 0 ? void 0 : metadata.referrer, startTime: eventTimestamp, lastActivity: eventTimestamp, isActive: true },
                update: {
                    lastActivity: newLastActivity,
                    isActive: true,
                    country
                },
            });
            yield client_1.default.event.create({
                data: { id, sessionId, type: eventData.type, page, timestamp: eventTimestamp, metadata: metadata || {} },
            });
            yield updatedDailyStats(today, page);
            updateInMemorySession(eventData);
            checkForSpikeAndAlert();
        }
        catch (error) {
            logger_1.default.error("Error processing visitor event:", error);
            throw error;
        }
    });
}
function checkForSpikeAndAlert() {
    const now = Date.now();
    recentEventTimestamps.push(now);
    recentEventTimestamps = recentEventTimestamps.filter((timestamp) => now - timestamp < ALERT_TIMEFRAME_MS);
    const visitorsLastMinute = recentEventTimestamps.length;
    if (isAlertOnCooldown) {
        return;
    }
    let alertToSend = null;
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
    }
    else if (visitorsLastMinute >= SPIKE_THRESHOLD_INFO) {
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
        const wss = (0, WebSocketServer_1.getWebSocketServer)();
        wss.broadcast(alertToSend);
        isAlertOnCooldown = true;
        console.log(`Alert sent, Entering cooldown period for ${ALERT_COOLDOWN_MS / 1000}s.`);
        setTimeout(() => {
            isAlertOnCooldown = false;
            console.log("Alert cooldown period ended, ready to send new alerts.");
        }, ALERT_COOLDOWN_MS);
    }
}
function updatedDailyStats(date, page) {
    return __awaiter(this, void 0, void 0, function* () {
        yield client_1.default.dailyStats.upsert({
            where: { date },
            create: { date, totalPageViews: 1 },
            update: { totalPageViews: { increment: 1 } },
        });
        yield client_1.default.pageStats.upsert({
            where: { page_date: { page, date } },
            create: { page, date, views: 1 },
            update: { views: { increment: 1 } },
        });
    });
}
function updateInMemorySession({ id, sessionId, page, timestamp, country }) {
    const now = new Date(timestamp);
    let session = activeSessions.get(sessionId);
    if (!session) {
        console.log(`Creating new in-memory session for ${sessionId} from country: ${country}`);
        const newSession = { id, sessionId, startTime: now, journey: [page], currentPage: page, duration: 0, lastActivity: now, country };
        activeSessions.set(sessionId, newSession);
        return;
    }
    // we only update properties on the existing session object
    session.id = id;
    session.country = country;
    session.currentPage = page;
    session.lastActivity = now;
    session.duration = Math.round((now.getTime() - session.startTime.getTime()) / 1000);
    if (session.journey[session.journey.length - 1] !== page) {
        session.journey.push(page);
    }
    activeSessions.set(sessionId, session);
}
function getAnalyticsSummary() {
    return __awaiter(this, void 0, void 0, function* () {
        const today = new Date();
        today.setUTCHours(0, 0, 0, 0);
        const totalVisitorsTodayCount = yield client_1.default.session.count({
            where: {
                lastActivity: {
                    gte: today
                }
            }
        });
        const pageViews = yield client_1.default.pageStats.findMany({
            where: { date: today },
            orderBy: { views: 'desc' }
        });
        const pagesVisited = pageViews.reduce((acc, curr) => (Object.assign(Object.assign({}, acc), { [curr.page]: curr.views })), {});
        return {
            totalActive: activeSessions.size,
            totalToday: totalVisitorsTodayCount,
            pagesVisited,
        };
    });
}
function getActiveSessions() {
    return Array.from(activeSessions.values());
}
function getSessionById(sessionId) {
    return activeSessions.get(sessionId);
}
function cleanupInactiveSessions() {
    const INACTIVE_THRESHOLD_MS = 5 * 60 * 1000;
    const now = Date.now();
    let cleanedCount = 0;
    activeSessions.forEach((session, sessionId) => {
        if (now - session.lastActivity.getTime() > INACTIVE_THRESHOLD_MS) {
            activeSessions.delete(sessionId);
            client_1.default.session
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
        logger_1.default.info(`Cleaned up ${cleanedCount} inactive sessions.`);
    }
}
function getFilteredEvents(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const whereClause = {};
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
        return client_1.default.event.findMany({
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
    });
}
function getFilteredEventsForFrontend(filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const dbEvents = yield getFilteredEvents(filter);
        return dbEvents.map((event) => {
            var _a;
            return ({
                id: event.id,
                sessionId: event.sessionId,
                page: event.page,
                country: ((_a = event.session) === null || _a === void 0 ? void 0 : _a.country) || "N/A",
                timestamp: event.timestamp.toISOString(),
                type: event.type,
            });
        });
    });
}
function resetAllStats() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client_1.default.$transaction([
            client_1.default.event.deleteMany(),
            client_1.default.session.deleteMany(),
            client_1.default.dailyStats.deleteMany(),
            client_1.default.pageStats.deleteMany(),
            client_1.default.countryStats.deleteMany(),
            client_1.default.alertLog.deleteMany(),
            client_1.default.dashboardActionLog.deleteMany(),
        ]);
        activeSessions.clear();
        logger_1.default.info("All analytics stats have been reset.");
    });
}
