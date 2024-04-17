// models/pulseData.js
const mongoose = require('mongoose');

const pulseDataSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  }
});

const PulseData = mongoose.model('PulseData', pulseDataSchema);

module.exports = PulseData;
