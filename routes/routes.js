const route=require('express').Router()
const dbcontrol=require('../controller/controller')
const dbq=require('../models/models')
const dbadvie=require('../models/advice')
const multer  = require('multer');
const dbqdoc=require('../models/doctormodel')
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const heartbeatController = require('../controller/bpmcontr');
const { deleteAdvice } = require('../controller/deleteadvice');
route.post('/registeruser',dbcontrol.registeruser)
route.post('/registeruseralone',dbcontrol.registeruseralone)
route.post('/loginuseralone',dbcontrol.loginuseralone)
route.post('/data', dbcontrol.saved);

route.post('/heartbeat', (req, res) => {
  heartbeatController.postHeartbeat(req, res);
});
route.post('/registerdoctor',upload.single('photo'),dbcontrol.registerdoctor)
route.post('/logindoc',dbcontrol.logindoc)
route.post('/loginuser',dbcontrol.loginuser)
route.post('/getuser',dbcontrol.getdatacontroller)
route.get('/getdata',async (req,res)=>{
  try{
  const fetch= await dbadvie.find({})
    res.status(200).json(fetch)
  }catch(err){console.log(err)}
})
route.post('/delete',dbcontrol.deleteuser)
route.post('/deletedoc',dbcontrol.deletedoc)
route.post('/advice',dbcontrol.registeradvice)

route.post('/data', dbcontrol.dbloadd)
route.post('/updatedoc', dbcontrol.updatedoctor)
route.post('/finding',dbcontrol.finding)
route.get('/finding',async (req,res)=>{
  try{
  const fetch= await dbq.find({})
    res.status(200).json(fetch)
  }catch(err){console.log(err)}
})

//route.post('/upload', upload.single('photo'), dbcontrol.newload);

route.post('/update', dbcontrol.updateuser)
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