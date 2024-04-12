const mongoose=require('mongoose')
const db=require('../config/db')
const usershema = require('../models/doctormodel')
const { Schema }=mongoose
const Adviceschema =new Schema({

advice:{
   type:String,
   required:true,
},

createdat: {
   type: Date,
   default: Date.now ,
}
})
//Adviceschema.index({ advice: 1 }, { expireAfterSeconds: 24 * 60 * 60 });


const Advice=db.model('advice',Adviceschema)
module.exports=Advice