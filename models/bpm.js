const db=require('../config/db')
const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  sensorValue: Number
});


const Bpm=db.model('Bpms',DataSchema)
module.exports=Bpm