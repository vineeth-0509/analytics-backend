"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServer = void 0;
exports.initializeWebSocket = initializeWebSocket;
exports.getWebSocketServer = getWebSocketServer;
const ws_1 = require("ws");
const handler_1 = require("./handler");
let wssInstance;
class WebSocketServer {
    constructor(server) {
        this.wss = new ws_1.WebSocketServer({ server });
        this.initialize();
    }
    initialize() {
        this.wss.on('connection', (ws) => {
            console.log('New dashboard connected. Total:', this.wss.clients.size);
            this.broadcast({
                type: 'user_connected',
                data: {
                    totalDashboards: this.wss.clients.size,
                    connectedAt: new Date().toISOString(),
                },
            });
            ws.on('message', (message) => (0, handler_1.handleWebSocketMessage)(ws, message));
            ws.on('close', () => {
                console.log('Dashboard disconnected. Total:', this.wss.clients.size);
                this.broadcast({
                    type: 'user_disconnected',
                    data: { totalDashboards: this.wss.clients.size },
                });
            });
            ws.on('error', (error) => console.error('Websocket error:', error));
        });
    }
    broadcast(message) {
        const payload = JSON.stringify(message);
        this.wss.clients.forEach((client) => {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(payload);
            }
        });
    }
}
exports.WebSocketServer = WebSocketServer;
function initializeWebSocket(server) {
    if (!wssInstance) {
        wssInstance = new WebSocketServer(server);
    }
    return wssInstance;
}
function getWebSocketServer() {
    if (!wssInstance) {
        throw new Error('WebSocket server has not been initialized.');
    }
    return wssInstance;
}
