const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const useroute =require('./routes/routes')
const app = express()
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
const setupWebSocketServer = require('./routes/bpmroute');
setupWebSocketServer(server);

app.use(bodyparser.json())
app.use(cors({origin:"*",}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/12',useroute)
module.exports=app