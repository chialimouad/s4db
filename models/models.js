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
idpulse:{
   type:String,
   required:false,
},
Gender:{
   type:String,
   required:false,
},
mld:{
   type:String,
   required:false,
},
moredata:{
   type:String,
   required:false,
},
advide:{
   type:String,
   required:false,
},

createdat: {
   type: Date,
   default: Date.now // Use default value of current date/time
}
})

userschema.index({ advide: 1 }, { expireAfterSeconds: 24 * 60 * 60 });

const Patients=db.model('Patient',userschema)
module.exports=Patients