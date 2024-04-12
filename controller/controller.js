const userserv =require('../services/services')
const docserv =require('../services/doctorservice')
const Jwt=require('jsonwebtoken')
const bcrypted = require('bcrypt')
const dbq=require('../models/models')
const dbqdoc=require('../models/doctormodel')
const dbqim=require('../models/imagemodel')
const dbalone=require('../models/usersignup')


exports.registeruser= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata,docname}=req.body
    const usercontrol =await userserv.registeruser(email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata,docname)

    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}
exports.registeruseralone= async(req,res,next)=>{
  try{
  const {email,fullname,phonenumber,maladie,willaya,Age,password,Grp,Gender,mld,moredata}=req.body
  const usercontrol =await userserv.registeruseralone(email,fullname,phonenumber,maladie,willaya,Age,password,Grp,Gender,mld,moredata)

  res.json({status:true,success:"user succsefully"})
  
}catch(err){console.log(err)}}
exports.finding= async(req,res,next)=>{
  try{
  const {fullname}=req.body
  let finding =await userserv.finding(fullname)
  res.json({status:true,success:finding})
}catch(err){console.log(err)}}

exports.registeradvice= async(req,res,next)=>{
  try{
  const {advice}=req.body
  const usercontrol =await userserv.adviceregister(advice)

  res.json({status:true,success:"user succsefully"})
  
}catch(err){console.log(err)}}





exports.newload = 
  async (req, res)=> {
    try {
      const { name, data, contentType } = req.body;
      await docserv.uploadPhoto(name, data, contentType);
      res.status(201).send('Photo uploaded successfully.');
    } catch (error) {
      console.error('Error uploading photo:', error);
      res.status(500).send('Error uploading photo.');
    }
  }




exports.dbloadd= async(req,res,next)=>{
    io.on('connection', (socket) => {
        console.log('Client connected');
      
        // Sensor data handler
        socket.on('sensorData','pulseid', async (data,pulseid) => {
          console.log('Received sensor data:', data,'id is :',pulseid);
      
          try {
             const loaddata=userserv.getbpm(data,pulseid)
             res.json({status:true,success:"user succsefully"})

          }catch(err){console.log(err)}
        });
      
        // Handle disconnection
        socket.on('disconnect', () => {
          console.log('Client disconnected');
        });
      });
  }


  exports.loginuseralone= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const userlogin =await dbalone.findOne({email})
    if(!userlogin){
        return res.status(400).json({msg:"Email Exist"})

      }
      if(!(password==userlogin.password)){
        return res.status(400).json({msg:"incorect"})
      }
      let tokendata ={id:userlogin._id,email:userlogin.email,fullname:userlogin.fullname,password:userlogin.password,phonenumber:userlogin.phonenumber,Age:userlogin.Age,Grp:userlogin.Grp,willaya:userlogin.willaya,maladie:userlogin.maladie,idpulse:userlogin.idpulse,}
      var token =await userserv.generatetoken(tokendata,"patients","10h")
      res.json({status:true,success:"user succsefully",token:token})
}catch(err){console.log(err)}}



exports.loginuser= async(req,res,next)=>{
    try{
    const {email,password}=req.body
    const userlogin =await dbq.findOne({email})
    if(!userlogin){
        return res.status(400).json({msg:"Email Exist"})

      }
      if(!(password==userlogin.password)){
        return res.status(400).json({msg:"incorect"})
      }
      let tokendata ={id:userlogin._id,email:userlogin.email,fullname:userlogin.fullname,password:userlogin.password,phonenumber:userlogin.phonenumber,Age:userlogin.Age,Grp:userlogin.Grp,willaya:userlogin.willaya,maladie:userlogin.maladie,idpulse:userlogin.idpulse,userId:userlogin.userId}
      var token =await userserv.generatetoken(tokendata,"patients","10h")
      res.json({status:true,success:"user succsefully",token:token})
}catch(err){console.log(err)}}
exports.deleteuser= async(req,res,next)=>{
    try{
    const {id}=req.body
    let deleted =await userserv.deleting(id)
   res.json({status:true,success:deleted})
}catch(err){next(err)}}

exports.deletedoc= async(req,res,next)=>{
  try{
  const {id}=req.body
  let deleted =await docserv.deleting(id)
 res.json({status:true,success:deleted})
}catch(err){next(err)}}

exports.updatedoctor= async(req,res,next)=>{
  const { email,fullname,phonenumber,willaya,password } = req.body; 
    const { id } = req.body;
    try {
      let update =await docserv.updatedocotr(id,{email,fullname,phonenumber,willaya,password },{new:true})
      res.json({status:true,success:update})

   
}catch(err){ return res.status(500).json({ message: ' server error', err: err.message });
}}

exports.updateuser= async(req,res,next)=>{
  const { email,fullname,phonenumber,willaya,password,idpulse } = req.body; 
    const { id } = req.body;
    try {
      let update =await userserv.updating(id,{email,fullname,phonenumber,willaya,password,idpulse },{new:true})
      res.json({status:true,success:update})

   
}catch(err){ return res.status(500).json({ message: ' server error', err: err.message });
}}




// exports.updateuser= async(req,res,next)=>{
//     try{
//     const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie}=req.body
//     let updateuser =await userserv.updating(email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie)
//    res.json({status:true,success:updateuser})
// }catch(err){next(err)}}
exports.registerdoctor= async(req,res,next)=>{
    try{
    const {email,fullname,phonenumber,Specialite,willaya,Age,password,data,name,contentType}=req.body
    const doccontrol =await docserv.registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password,data,name,contentType)

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
    
    let tokendata ={id:doclogin._id,email:doclogin.email,fullname:doclogin.fullname,password:doclogin.password,phonenumber:doclogin.phonenumber,Age:doclogin.Age,Specialite:doclogin.Specialite,willaya:doclogin.willaya,data:doclogin.data,name:doclogin.name,contentType:doclogin.contentType}
      var token =await docserv.generatetoken(tokendata,"mouadio","1h")
    
    res.json({status:true,success:"user succsefully",token:token})
     
}catch(err){console.log(err)}}
// exports.verifytoken=async(req,res,next)=>{
//     const tokver=req.cookies.Jwt
//     if(tokver){
//       Jwt.verify(tokver,"mouadio",(err,decodedtoken)=>{
//           if(err){
//               res.status(400).json({msg:"dont user"})
//           }else{
//               next()
//           }
//       })
//     }
// }
exports.getdatacontroller=async(req,res,next)=>{
    const {userId}=req.body
    let getdatafrom =await userserv.getdata(userId)
  res.json({status:true,success:getdatafrom})

}
// exports.getdatacontrollerspecial=async(req,res,next)=>{
//     const {email}=req.body
//     let getdatafrom =await userserv.getdataspecial(email)
//   res.json({status:true,success:getdatafrom})

// }
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