const userserv =require('../services/services')
const docserv =require('../services/doctorservice')
const Jwt=require('jsonwebtoken')
const bcrypted = require('bcrypt')
const dbq=require('../models/models')
const dbqdoc=require('../models/doctormodel')
exports.register= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
    const usercontrol =await userserv.registeruser(email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie)
   
      const hashpas=bcrypted.hash(password,10)
               password =hashpas
      usercontrol=new usercontrol.save()
    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}

exports.registerdoctor= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,Specialite,willaya,Age,password}=req.body
    const doccontrol =await docserv.registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password)
   
    const hashpas=bcrypted.hash(password,10)
               password =hashpas
    doccontrol=new doccontrol.save()
    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}
exports.logindoc= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const doclogin =await dbqdoc.findOne({email})
    if(!doclogin){
        return res.status(400).json({msg:"Email Exist"})

      }
      const ismatch = await bcrypted.compare(password,doclogin.password);
      if(!ismatch){
        return res.status(400).json({msg:"incorect"})
      }
    
    
      
    res.json({status:true,success:"user succsefully"})
     
}catch(err){console.log(err)}}
exports.login= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
    const userlogin =await dbq.findOne({email})
    if(!userlogin){
        return res.status(400).json({msg:"Email Exist"})

      }
      const ismatch = await bcrypted.compare(password,userlogin.password);
      if(!ismatch){
        return res.status(400).json({msg:"incorect"})
      }
     
    
      
    res.json({status:true,success:"user succsefully"})
     
}catch(err){console.log(err)}}
