// routes/pulseRoute.js
const WebSocket = require('ws');
const { handlePulseData } = require('../controller/bpmcontroller');

function setupWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('WebSocket connection established.');

    ws.on('message', function incoming(message) {
      console.log('Received message from client:', message);
      handlePulseData(ws, message);
    });
  });
}

module.exports = setupWebSocketServer;
