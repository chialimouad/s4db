// controllers/websocketController.js
class WebSocketController {
  constructor(websocketService) {
    this.websocketService = websocketService;
  }

  handleMessage(message) {
    console.log('Received message from client:', message);
    // Handle message as needed
  }
}

module.exports = WebSocketController;
