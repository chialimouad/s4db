const dbq=require('../models/models')
class serviceuser{
     static async registeruser(userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie){
       try{
       const par=new dbq({userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie})
       return await par.save()
          
       }catch(err){console.log(err)}
     }

     static async getdata(userId){
      try{
      const goti=await dbq.find({userId})
      return goti

      }catch(err){console.log(err)}
    }
    }

   
module.exports=serviceuser