const db=require('../config/dbbpm')
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  sensorValue: Number
});

module.exports = mongoose.model('bpm', DataSchema);
