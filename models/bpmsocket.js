const mongoose = require('mongoose');

const valueBPMSchema = new mongoose.Schema({
  valuebpm: Number,
  timestamp: { type: Date, default: Date.now }
});

const ValueBPM = mongoose.model('ValueBPM', valueBPMSchema);

module.exports = ValueBPM;
