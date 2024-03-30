const userserv =require('../services/services')
const docserv =require('../services/doctorservice')
const Jwt=require('jsonwebtoken')
const bcrypted = require('bcrypt')
const dbq=require('../models/models')
const dbqdoc=require('../models/doctormodel')
const { json } = require('body-parser')
exports.register= async(req,res,next)=>{
    try{
    const {userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
    const usercontrol =await userserv.registeruser(userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie)
   
    let tokendata ={id:userlogin._id,email:userlogin.email,fullname:userlogin.fullname,password:userlogin.password,phonenumber:userlogin.phonenumber,Age:userlogin.Age,Grp:userlogin.Grp,willaya:userlogin.willaya,maladie:userlogin.maladie,idpulse:userlogin.idpulse}
    var usertoken =await userserv.generatetoken(tokendata,"patients","10h")
    res.json({status:true,success:usercontrol})
    
}catch(err){console.log(err)}}
exports.loginuser= async(req,res,next)=>{
    try{
    const {email}=req.body
    const userlogin =await dbq.find({email})
    if(!userlogin){
        return res.status(400).json({msg:"Email Exist"})

      }
    //   let tokendata ={id:userlogin._id,email:userlogin.email,fullname:userlogin.fullname,password:userlogin.password,phonenumber:userlogin.phonenumber,Age:userlogin.Age,Grp:userlogin.Grp,willaya:userlogin.willaya,maladie:userlogin.maladie,idpulse:userlogin.idpulse,userId:userlogin.userId}
    //   var usertoken =await userserv.generatetoken(tokendata,"patients","10h")
    res.json({status:true,success:"user succsefully",token:usertoken})
    
}catch(err){console.log(err)}}
exports.registerdoctor= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,Specialite,willaya,Age,password}=req.body
    const doccontrol =await docserv.registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password)

    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}
exports.logindoc= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const doclogin =await dbqdoc.findOne({email})
    if(!doclogin){
        return res.status(400).json({msg:"Email Exist"})

      }
      if(!(password==doclogin.password)){
        return res.status(400).json({msg:"incorect"})
      }
    
    let tokendata ={id:doclogin._id,email:doclogin.email,fullname:doclogin.fullname,password:doclogin.password,phonenumber:doclogin.phonenumber,Age:doclogin.Age,Specialite:doclogin.Specialite,willaya:doclogin.willaya}
      var token =await docserv.generatetoken(tokendata,"mouadio","1h")
    
    res.json({status:true,success:"user succsefully",token:token})
     
}catch(err){console.log(err)}}
exports.verifytoken=async(req,res,next)=>{
    const tokver=req.cookies.Jwt
    if(tokver){
      Jwt.verify(tokver,"mouadio",(err,decodedtoken)=>{
          if(err){
              res.status(400).json({msg:"dont user"})
          }else{
              next()
          }
      })
    }
}
exports.getdatacontroller=async(req,res,next)=>{
    const {userId}=req.body
    let getdatafrom =await userserv.getdata(userId)
  res.json({status:true,success:getdatafrom})

}
exports.getdatacontrollerspecial=async(req,res,next)=>{
    const {email}=req.body
    let getdatafrom =await userserv.getdataspecial(email)
  res.json({status:true,success:getdatafrom})

}
// exports.login= async(req,res,next)=>{
//     try{
//     const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
//     const userlogin =await dbq.findOne({email})
//     if(!usercontrol){
//         return res.status(400).json({msg:"Email Exist"})

//       }
//       const ismatch = await bcrypted.compare(password,user1.password);
//       if(!ismatch){
//         return res.status(400).json({msg:"incorect"})
//       }
     
    
      
//     res.json({status:true,success:"user succsefully"})
     
// }catch(err){console.log(err)}}