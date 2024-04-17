// controllers/HeartbeatController.js
const HeartbeatModel = require('../models/bpm');

class HeartbeatController {
  constructor() {
    this.heartbeatModel = new HeartbeatModel('mongodb+srv://mouadchiali:mouadchiali@clustertestprojet.n7r4egf.mongodb.net/', 'Hbpm', 'heartbeats');
  }

  async postHeartbeat(req, res) {
    const { value } = req.body;
    await this.heartbeatModel.insertHeartbeat(value);
    res.sendStatus(200);
  }
}

module.exports = new HeartbeatController();
