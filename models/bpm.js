const mongoose=require('mongoose')
const dbdoc=require('../config/dbdoctor')
const Bpmschema =new Schema({
  
    bpm: Number,
    timestamp: { type: Date, default: Date.now }
 

   



})


const Bpm=dbdoc.model('Bpm',Bpmschema)
module.exports=Bpm
