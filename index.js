const express =require('express')
const bodyparser =require('body-parser')
const cors =  require('cors')
const dataRoute = require('./routes/bpmroutes');
const useroute =require('./routes/routes')
const app = express()
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);

app.use(dataRoute);
app.use(bodyparser.json())
app.use(cors({origin:"*",}))
app.use(bodyparser.urlencoded({extended:true}))
app.use('/12',useroute)
module.exports=app