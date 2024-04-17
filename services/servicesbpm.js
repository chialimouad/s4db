// services/websocketService.js
class WebSocketService {
    constructor(websocketModel) {
      this.websocketModel = websocketModel;
    }
  
    addClient(client) {
      this.websocketModel.addClient(client);
    }
  
    removeClient(client) {
      this.websocketModel.removeClient(client);
    }
  
    broadcastData(data) {
      this.websocketModel.broadcastData(data);
    }
  }
  
  module.exports = WebSocketService;
  