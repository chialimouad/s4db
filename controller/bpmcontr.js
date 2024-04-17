// controllers/HeartbeatController.js
const Heartbeat = require('../models/bpm');

class HeartbeatController {
  async postHeartbeat(req, res) {
    try {
      const { value } = req.body;
      await Heartbeat.create({ value });
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = new HeartbeatController();
