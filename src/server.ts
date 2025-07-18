import http from "http";
import app from "./app";
import { initializeWebSocket } from "./websocket/WebSocketServer";

const PORT =  process.env.PORT || 3000;
const server = http.createServer(app);

initializeWebSocket(server);

server.listen(PORT,()=>{
    console.log(`Server is running at localhost:${PORT}`);
    console.log('Websocket server connected and running');
})