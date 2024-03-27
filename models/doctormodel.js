const mongoose=require('mongoose')
const dbdoc=require('../config/dbdoctor')
const { Schema }=mongoose
const docschema =new Schema({
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
    Specialite:{
        type:String,
        required:true,
     },
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


const Doctors=dbdoc.model('Doctors',docschema)
module.exports=Doctors
