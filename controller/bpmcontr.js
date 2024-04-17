// controller.js

function handleWebSocketConnection(ws) {
    console.log('WebSocket connected');
  
    ws.on('message', function incoming(message) {
      console.log('Received message:', message);
      // Handle incoming message here
    });
  
    ws.on('close', function close() {
      console.log('WebSocket disconnected');
    });
  }
  
  module.exports = {
    handleWebSocketConnection
  };
  