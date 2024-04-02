const mongoose=require('mongoose')
const db=require('../config/db')
const usershema = require('../models/doctormodel')
const { Schema }=mongoose
const userschema =new Schema({
   
userId:{
   type:Schema.Types.ObjectId,
   ref:usershema.modelName,
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
idpulse:{
   type:String,
   required:false,
},


})


const Patients=db.model('Patient',userschema)
module.exports=Patients