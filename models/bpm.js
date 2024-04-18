
const mongoose=require('mongoose')
const dbdoc=require('../config/dbbpm')
const { Schema }=mongoose
const docschema =new Schema({
 
    timestamp: {
        type: Date,
        default: Date.now
      },
    value:{
        type:Number,
        required:true,
     },
   
})


const Heartbeat=dbdoc.model('Heartbeat',docschema)
module.exports=Heartbeat