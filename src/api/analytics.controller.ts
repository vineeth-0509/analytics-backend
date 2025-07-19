import { VisitorEvent } from "../types/global";
import {Request, Response} from "express";
import * as analyticsService from "../services/analytics.service";
import { getWebSocketServer } from "../websocket/WebSocketServer";
import logger from "../config/logger";

export async function resetStats(req:Request, res:Response){
   try {
    await analyticsService.resetAllStats();
    const wss = getWebSocketServer();
    wss.broadcast({type:'stats_reset'});
    res.status(200).json({message:'All statistics have been reset.'})
   } catch (error) {
    console.error('Error resetting statistics:', error);
    res.status(500).json({error:'Failed to reset statistics'});
   }
}
export async function handleNewEvent(req:Request, res:Response){
    const eventData: VisitorEvent = req.body;
    if(!eventData.type || !eventData.sessionId || !eventData.page){
        return res.status(400).json({message:'Missing required event fields.'});

    }
    try {
        await analyticsService.processVisitorEvent(eventData);
        const wss = getWebSocketServer();
        const summary = await analyticsService.getAnalyticsSummary();
        const sessionActivity = analyticsService.getActiveSessions().find(s=> s.sessionId = eventData.sessionId);
        wss.broadcast({
            type:"visitor_update",
            data:{event: eventData, stats: summary}
        });
        if(sessionActivity){
            wss.broadcast({type:"session_activity", data:sessionActivity});
        }
        res.status(202).json({message:"Event received"});
    } catch (error) {
        logger.error('Error in handleNewEvent controller:', error);
        res.status(500).json({message:'Internal server error'});
    }
}

export async function getSummary(req:Request, res:Response){
    try {
        const summary = await analyticsService.getAnalyticsSummary();
        res.status(200).json(summary);
    } catch (error) {
        logger.error('Error fetching summmary:', error);
        res.status(500).json({message:"Internal server error"});
    }
}

export function getSessions(req:Request, res:Response){
    try {
        const sessions = analyticsService.getActiveSessions();
        res.status(200).json(sessions);
    } catch (error) {
        logger.error('Error fetching sessions:', error);
        res.status(500).json({message:"Internal server error"});
    }
}