"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const WebSocketServer_1 = require("./websocket/WebSocketServer");
const PORT = process.env.PORT || 8000;
const server = http_1.default.createServer(app_1.default);
(0, WebSocketServer_1.initializeWebSocket)(server);
server.listen(PORT, () => {
    console.log(`Server is running at localhost:${PORT}`);
    console.log('Websocket server connected and running');
});
