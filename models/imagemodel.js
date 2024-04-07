const mongoose=require('mongoose')
const db=require('../config/db')
const { Schema }=mongoose
const photoSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    contentType: String
  });
  
const photoSchemae =db.model('Photo',photoSchema)
module.exports=photoSchemae