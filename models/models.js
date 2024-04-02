const mongoose=require('mongoose')
const db=require('../config/db')
const usershema = require('../models/doctormodel')
const { Schema }=mongoose

const userschema =new Schema({
   
userId:{
   type:Schema.Types.ObjectId,
   ref:usershema.modelName,
   required:false
},
   email :{
       type:String,
       required:false,
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
   maladie:{
       type:String,
       required:false,
    },
    willaya:{
       type:String,
       required:false,
    },
    Age:{
       type:Number,
       required:false,
    },
    password:{
       type:String,
       required:false,
    },
    Grp:{
      type:String,
      required:false,
   },
   pulseid:{
      type:String,
      required:false,
   },
   Bpm:{
      type:Number,
      required:false,
   },



})


const Patients=db.model('Patients',userschema)
module.exports=Patients