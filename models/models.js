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
    idpulse:{
        type:String,
        required:true,
        unique:true,
     },
     willaya:{
        type:String,
        required:true,
     },
     password:{
        type:String,
        required:true,
     },
     Age:{
        type:Number,
        required:true,
     },
     Grp:{
      type:Boolean,
      required:true,
   },
         maladie:{
      type:Boolean,
      required:true,
   },


})


const Patients=db.model('Patients',userschema)
module.exports=Patients
