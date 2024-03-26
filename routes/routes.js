const route=require('express').Router()
const dbcontrol=require('../controller/controller')
const dbq=require('../models/models')
route.post('/register',dbcontrol.register)
route.get('/fetch',async (req,res)=>{
    try{
    const fetch= await dbq.find({})
      res.status(200).json(fetch)
    }catch(err){console.log(err)}
  })
module.exports=route