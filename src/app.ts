import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { cleanupInactiveSessions } from "./services/analytics.service";
import logger from "./config/logger";
import analyticsRoutes from './api/analaytics.routes';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api",analyticsRoutes);
app.get("/", (req, res)=>{
    res.status(200).send('Server is running');
});

setInterval(cleanupInactiveSessions, 60*1000);
logger.info('Inactive session cleanup job scheduled');

export default app;