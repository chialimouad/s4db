const mongoose = require('mongoose');

// Define a schema for the heartbeat data
const heartbeatSchema = new mongoose.Schema({
  value: Number,
  timestamp: { type: Date, default: Date.now }
});

// Create a Mongoose model based on the schema
const Heartbeat = mongoose.model('Heartbeat', heartbeatSchema);

class HeartbeatModel {
  constructor(uri) {
    this.uri = uri;
  }

  async insertHeartbeat(value) {
    try {
      // Connect to MongoDB
      await mongoose.connect(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });

      // Create a new heartbeat document
      const newHeartbeat = new Heartbeat({ value });

      // Save the heartbeat document to the database
      await newHeartbeat.save();

      // Close the connection
      mongoose.connection.close();
    } catch (error) {
      console.error('Error inserting heartbeat:', error);
    }
  }
}

module.exports = HeartbeatModel;
