
const usershema = require('../models/doctormodel')
const mongoose=require('mongoose')
const db=require('../config/db')
const { Schema }=mongoose
const userschema =new Schema({
    email :{
        type:String,
        required:true,
        unique:true,
      
    },
    fullname :{
        type:String,
        required:true,
       
    },
    phonenumber:{
       type:Number,
       required:true,
       unique:true,
    },
   //  maladie:{
   //      type:String,
   //      required:true,
   //   },
     willaya:{
        type:String,
        required:true,
     },
     Age:{
        type:Number,
        required:true,
     },
     password:{
        type:String,
        required:true,
     },
     



})


const Patients=db.model('Patients',userschema)
module.exports=Patients

