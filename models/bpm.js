const db=require('../config/db')
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  sensorValue: Number
});

module.exports = mongoose.model('bpm', DataSchema);
