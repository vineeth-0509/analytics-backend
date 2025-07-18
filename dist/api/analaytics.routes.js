"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const analytics_controller_1 = require("./analytics.controller");
const router = (0, express_1.Router)();
router.post('/events', analytics_controller_1.handleNewEvent);
router.get('/analytics/summary', analytics_controller_1.getSummary);
router.get('/analytics/sessions', analytics_controller_1.getSessions);
exports.default = router;
