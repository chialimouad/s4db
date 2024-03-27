const dbqa=require('../models/doctormodel')
const jwt =require('jsonwebtoken')
class servicedoctor{
    static async registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password){
      try{
      const par=new dbqa({email,fullname,phonenumber,Specialite,willaya,Age,password})
      return await par.save()

      }catch(err){console.log(err)}
    }
   

     static async generatetoken(tokendata,secretkey,jwt_expire){
       return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})

     }
   }
   module.exports=servicedoctor