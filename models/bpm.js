const mongoose=require('mongoose')
const dbdoc=require('../config/dbdoctor')
const BpmSchema = new mongoose.Schema({
    bpm: Number,
    timestamp: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Bpm', BpmSchema);
