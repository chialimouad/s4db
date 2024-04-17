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
const controller = require('./controller/bpmcontr');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', controller.handleWebSocketConnection);
app.use(bodyparser.json())
app.use(cors({origin:"*",}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/12',useroute)
module.exports=app