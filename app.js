// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/routes');
const http = require('http');
const WebSocket = require('ws');
const controller = require('./controller/bpmcontr');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WebSocket event handler
wss.on('connection', controller.handleWebSocketConnection);

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/12', userRoutes);

module.exports = server;
