const mongoose=require('mongoose')
const db=require('../config/db')
const usershema = require('../models/doctormodel')
const { Schema }=mongoose
const Adviceschema =new Schema({
   
userId:{
   type:Schema.Types.ObjectId,
   ref:usershema.modelName,
},
advice:{
   type:String,
   required:false,
},

createdat: {
   type: Date,
   default: Date.now // Use default value of current date/time
}
})


const Advice=db.model('advice',Adviceschema)
module.exports=Advice