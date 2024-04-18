const db=require('../config/dbbpm')
const mongoose = require('mongoose');

const heartbeatSchema = new mongoose.Schema({

  timestamp: {
    type: Date,
    default: Date.now
  },
  value:{
    type:Number,
    required:true,
 },
});


const Heartbeat =db.model('Heartbeat ',heartbeatSchema)
module.exports=Heartbeat 
