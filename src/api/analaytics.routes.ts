import {Router} from "express";
import { getSessions, getSummary, handleNewEvent } from "./analytics.controller";

const router = Router();
router.post('/events', handleNewEvent);
router.get('/analytics/summary', getSummary);
router.get('/analytics/sessions', getSessions);

export default router;