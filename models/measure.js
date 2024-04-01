const mongoose=require('mongoose')
const db=require('../config/db')
const { Schema }=mongoose
const Bpmscema =new Schema({
    id :{
        type:Number,
        unique:true,
      
    },
    Bpm :{
        type:Number,
        required:true,
       
    },
})


const Bpm=db.model('Bpms',Bpmscema)
module.exports=Bpm
