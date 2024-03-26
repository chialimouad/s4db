const userserv =require('../services/services')


exports.register= async(req,res,next)=>{try{
    const {email,fullname,phonenumber,idpulse,willaya,password,Age,Grp}=req.body
    const usercontrol =await userserv.registeruser(email,fullname,phonenumber,idpulse,willaya,password,Age,Grp)

    res.json({status:true,success:"user succsefully"})
    
}catch(err){console.log(err)}}

