import { ActiveSession, VisitorEvent } from "../types/global";

export interface AnalyticsSummary {
  totalActive: number;
  totalToday: number;
  pagesVisited: Record<string, number>;
}

export type ServerToClientMessage =
  | {
      type: "visitor_update";
      data: {
        event: VisitorEvent;
        stats: AnalyticsSummary;
      };
    }
  | {
    type:"detailed_stats_response";
    data:{
      filter: {country: string; page?:string};
      events: any[];
    }
  }
  | {
      type: "user_connected";
      data: {
        totalDashboards: number;
        connectedAt: string;
      };
    }
  | {
      type: "user_disconnected";
      data: {
        totalDashboards: number;
      };
    }
  | {
      type: "session_activity";
      data: ActiveSession;
    }
  | {
      type: "alert";
      data: {
        level: "info" | "warning" | "milestone";
        message: string;
        details?: Record<string, unknown>;
      };
    }
    | DetailedStatsResponseMessage
    | StatsResetMessage;

    export type DetailedStatsResponseMessage = {
        type:'detailed_stats_response';
        data:{
          filter: any;
          results:{
            id: string;
            type: string;
            page: string;
            timestamp: string;
            sessionId: string;
          }[];
        }
    }


    export type StatsResetMessage = {
      type:'stats_reset';
    }
export type ClientToServerMessage = 
| {
    type:'request_detailed_stats';
    filter:{
        country?: string;
        page?: string;
    };
}
| {
    type:'track_dashboard_action';
    action: string;
    details: Record<string, unknown>
};