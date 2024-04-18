
const mongoose=require('mongoose')
const dbdoc=require('../config/dbbpm')
const { Schema }=mongoose
const bpmschema =new Schema({
 
    createdat: {
        type: Date,
        default: Date.now ,
     },
    valuebpm:{
        type:Number,
        required:true,
     },
   
})


const Heartbeat=dbdoc.model('Heartbeat',bpmschema)
module.exports=Heartbeat