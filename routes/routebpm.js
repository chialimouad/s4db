// routes/heartbeat.js
const express = require('express');
const router = express.Router();
const heartbeatController = require('../controller/bpmcontr');

router.post('/', (req, res) => {
  heartbeatController.postHeartbeat(req, res);
});

module.exports = router;
