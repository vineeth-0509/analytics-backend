"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const analytics_service_1 = require("./services/analytics.service");
const logger_1 = __importDefault(require("./config/logger"));
const analaytics_routes_1 = __importDefault(require("./api/analaytics.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", analaytics_routes_1.default);
app.get("/", (req, res) => {
    res.status(200).send('Server is running');
});
setInterval(analytics_service_1.cleanupInactiveSessions, 60 * 1000);
logger_1.default.info('Inactive session cleanup job scheduled');
exports.default = app;
