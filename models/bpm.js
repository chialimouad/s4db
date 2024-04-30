
const mongoose = require('mongoose');

const patientDataSchema = new mongoose.Schema({
  patientID: String,
  sensor: String,
  value: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PatientData', patientDataSchema);
