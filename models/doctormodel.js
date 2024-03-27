const mongoose=require('mongoose')
const db=require('../config/dbdoctor')
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
    specialite:{
        type:String,
        required:true,
     },
     willaya:{
        type:String,
        required:true,
     },
     age:{
        type:Number,
        required:true,
     },
     password:{
        type:Number,
        required:true,
     },
     



})


const Doctors=db.model('Doctors',userschema)
module.exports=-Doctors
