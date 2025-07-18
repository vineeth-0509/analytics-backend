export interface VisitorEvent {
     type:"pageview" | "click" | "session_end";
     page: string;
     sessionId: string;
     timeStamp: string;
     country: string;
     metadata?: {
        device?: string;
        referrer?: string;
     };
}


export interface ActiveSession{
    sessionId: string;
    currentPage: string;
    journey: string[];
    duration: number;
    startTime: Date;
    lastActivity: Date;
    country?: string;
}