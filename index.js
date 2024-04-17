const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const useroute =require('./routes/routes')
const app = express()
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
const WebSocket = require('ws');
const WebSocketModel = require('./models/bpm');
const WebSocketService = require('./services/servicesbpm');
const WebSocketController = require('./controller/bpmcontroller');
const WebSocketRoutes = require('./routes/bpmroute');
const wss = new WebSocket.Server({ port: 3334 });
const websocketModel = new WebSocketModel();
const websocketService = new WebSocketService(websocketModel);
const websocketController = new WebSocketController(websocketService);
const websocketRoutes = new WebSocketRoutes(websocketController);

websocketRoutes.setupWebSocketRoutes(wss);

app.use(bodyparser.json())
app.use(cors({origin:"*",}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/12',useroute)
module.exports=app