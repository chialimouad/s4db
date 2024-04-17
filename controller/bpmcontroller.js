// controllers/websocketController.js
const WebSocketService = require('../services/servicesbpm');

class WebSocketController {
  constructor() {
    this.websocketService = new WebSocketService();
  }

  handleMessage(message) {
    console.log('Received message from client:', message);
    // Handle message as needed
  }
}

module.exports = WebSocketController;
