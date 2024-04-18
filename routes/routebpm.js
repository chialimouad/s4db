const WebSocket = require('ws');
const valuebpmController = require('../controller/bpmcontr');

function initWebSocketServer(server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', function connection(ws) {
    console.log('WebSocket connection established');

    ws.on('message', async function incoming(message) {
      console.log('Received:', message);
      const data = JSON.parse(message);

      try {
        // Handle incoming valuebpm
        const newValueBPM = await valuebpmController.handleValueBPM(data.valuebpm);
        console.log('Last valuebpm stored in MongoDB:', newValueBPM);
      } catch (error) {
        console.error('Error handling valuebpm:', error);
      }
    });
  });

  wss.on('error', function error(err) {
    console.error('WebSocket server error:', err);
  });
}

module.exports = initWebSocketServer;
