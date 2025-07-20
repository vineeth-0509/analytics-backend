export interface VisitorEvent {
  id: string;
  type: "pageview" | "click" | "session_end";
  page: string;
  sessionId: string;
  timestamp: string;
  country: string;
  metadata?: {
    device?: string;
    referrer?: string;
  };
}

export interface ActiveSession {
  id: string;
  sessionId: string;
  currentPage: string;
  journey: string[];
  duration: number;
  startTime: Date;
  lastActivity: Date;
  country: string;
}
