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
      let user1 =new dbq({
        email,
        password:hashpas,
        fullname,
        phonenumber,
        willaya,
        password,
        Age,
        Grp,
        maladie,
      })
      user1=new user1.save()
    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}

exports.registerdoctor= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,Specialite,willaya,Age,password}=req.body
    const doccontrol =await docserv.registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password)
   
    const hashpas=bcrypted.hash(password,10)
    let doc1 =new dbqdoc({
      email,
      password:hashpas,
      fullname,
      phonenumber,
      willaya,
      password,
      Age,
      Specialite,
      
      
    })
    doc1=new doc1.save()
    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}
exports.logindoc= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const doclogin =await dbqdoc.findOne({email})
    if(!doc1){
        return res.status(400).json({msg:"Email Exist"})

      }
      const ismatch = await bcrypted.compare(password,doc1.password);
      if(!ismatch){
        return res.status(400).json({msg:"incorect"})
      }
      const token = Jwt.sign({id:doc1._id},"Socketiomouad")
      res.json({token,...doc1._doc})
    
      
    res.json({status:true,success:"user succsefully"})
     
}catch(err){console.log(err)}}
exports.login= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
    const userlogin =await dbq.findOne({email})
    if(!usercontrol){
        return res.status(400).json({msg:"Email Exist"})

      }
      const ismatch = await bcrypted.compare(password,user1.password);
      if(!ismatch){
        return res.status(400).json({msg:"incorect"})
      }
      const token = Jwt.sign({id:user._id},"Socketiomouad")
      res.json({token,...user._doc})
    
      
    res.json({status:true,success:"user succsefully"})
     
}catch(err){console.log(err)}}
