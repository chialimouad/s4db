const db=require('../config/dbbpm')
const mongoose = require('mongoose');

const heartbeatSchema = new mongoose.Schema({
  value: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});


const Heartbeat =db.model('Heartbeat ',heartbeatSchema)
module.exports=Heartbeat 
