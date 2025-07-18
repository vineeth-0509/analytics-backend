import {Server} from 'http';
import { WebSocketServer as WSS, WebSocket } from 'ws';
import { handleWebSocketMessage } from './handler';
import { ServerToClientMessage } from './types';

let wssInstance : WebSocketServer;
export class WebSocketServer {
    private wss: WSS;

    constructor(server: Server){
        this.wss = new WSS({server});
        this.initialize();
    }

    private initialize(){
        this.wss.on('connection', (ws:WebSocket) =>{
            console.log('New dashboard connected. Total:', this.wss.clients.size);

            this.broadcast({
                type:'user_connected',
                data:{
                    totalDashboards: this.wss.clients.size,
                    connectedAt: new Date().toISOString(),
                },
            });

            ws.on('message',(message: string) => handleWebSocketMessage(ws, message));
            ws.on('close', ()=>{
                console.log('Dashboard disconnected. Total:', this.wss.clients.size);
                this.broadcast({
                    type:'user_disconnected',
                    data:{totalDashboards: this.wss.clients.size},
                })
            });

            ws.on('error', (error) => console.error('Websocket error:', error));
        })
    }


    public broadcast(message: ServerToClientMessage){
        const payload = JSON.stringify(message);
        this.wss.clients.forEach((client) =>{
            if(client.readyState === WebSocket.OPEN){
                client.send(payload);
            }
        });
    }
}

export function initializeWebSocket(server:Server): WebSocketServer{
    if(!wssInstance){
        wssInstance = new WebSocketServer(server);
    }
    return wssInstance;
}

export function getWebSocketServer(): WebSocketServer {
    if (!wssInstance){
        throw new Error('WebSocket server has not been initialized.');
    }
    return wssInstance;
}