const route=require('express').Router()
const dbcontrol=require('../controller/controller')
const dbq=require('../models/models')
const dbqdoc=require('../models/doctormodel')
route.post('/register',dbcontrol.registeruser)
route.post('/registerdoctor',dbcontrol.registerdoctor)
route.post('/logindoc',dbcontrol.logindoc)
route.post('/loginuser',dbcontrol.loginuser)
route.post('/getuser',dbcontrol.getdatacontroller)
route.post('/delete',dbcontrol.deleteuser)
route.post('/data', dbcontrol.dbload)
//route.post('/update', dbcontrol.updateuser)
route.get('/fetch',async (req,res)=>{
    try{
    const fetch= await dbq.find({})
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