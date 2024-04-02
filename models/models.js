const mongoose=require('mongoose')
const db=require('../config/db')
const usershema = require('../models/doctormodel')
const { Schema }=mongoose

const userschema =new Schema({
   
userId:{
   type:Schema.Types.ObjectId,
   ref:usershema.modelName
},
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
   maladie:{
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
    Grp:{
      type:String,
      required:true,
   },
   pulseid:{
      type:String,
      required:true,
   },
   Bpm:{
      type:Array,
      required:false,
   },



})


const Patients=db.model('Patients',userschema)
module.exports=Patients