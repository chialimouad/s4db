const route=require('express').Router()
const dbcontrol=require('../controller/controller')
const dbq=require('../models/models')
const dbadvie=require('../models/advice')
const dbqdoc=require('../models/doctormodel')
const { deleteAdvice } = require('../controller/deleteadvice');
route.post('/registeruser',dbcontrol.registeruser)
route.post('/registerdoctor',dbcontrol.registerdoctor)
route.post('/logindoc',dbcontrol.logindoc)
route.post('/loginuser',dbcontrol.loginuser)
route.post('/getuser',dbcontrol.getdatacontroller)
route.post('/delete',dbcontrol.deleteuser)
route.post('/deleteAdvice', async (req, res) => {
  try {
      await deleteAdvice();
      res.status(200).json({ success: true, message: 'Advice deletion triggered successfully.' });
  } catch (error) {
      console.error('Error occurred while triggering advice deletion:', error);
      res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});
route.post('/data', dbcontrol.dbload)
//route.post('/update', dbcontrol.updateuser)
route.get('/fetch',async (req,res)=>{
    try{
    const fetch= await dbq.find({})
      res.status(200).json(fetch)
    }catch(err){console.log(err)}
  })
  route.get('/fetchadvice',async (req,res)=>{
    try{
    const fetch= await dbadvie.find({})
      res.status(200).json(fetch)
    }catch(err){console.log(err)}
  })
  route.get('/fetchdoc',async (req,res)=>{
    try{
    const fetch= await dbqdoc.find({})
      res.status(200).json(fetch)
    }catch(err){console.log(err)}
  })
module.exports=route