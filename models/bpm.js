// models/websocketModel.js
class WebSocketModel {
    constructor() {
      this.clients = new Set();
    }
  
    addClient(client) {
      this.clients.add(client);
    }
  
    removeClient(client) {
      this.clients.delete(client);
    }
  
    broadcastData(data) {
      this.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    }
  }
  
  module.exports = WebSocketModel;
  