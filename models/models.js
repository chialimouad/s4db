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
        required:false,
       
    },
    phonenumber:{
       type:Number,
       required:false,
       unique:true,
    },
    idpulse:{
        type:String,
        required:false,
        unique:true,
     },
     willaya:{
        type:String,
        required:false,
     },
     password:{
        type:String,
        required:false,
     },
     Age:{
        type:Number,
        required:false,
     },
     Grp:{
      type:String,
      required:false,
   },
      maladie:{
      type:String,
      required:false,
   },


})


const Patients=db.model('Patients',userschema)
module.exports=Patients