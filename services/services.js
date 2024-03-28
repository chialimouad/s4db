const dbq=require('../models/models')
class serviceuser{
     static async registeruser(email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie){
       try{
       const par=new dbq({email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie})
       return await par.save()
          
       }catch(err){console.log(err)}
     }
     
     static async getdata(userId){
      try{
      const par=await dbq.find({userId})
      return par

      }catch(err){console.log(err)}
    }
    }

   
module.exports=serviceuser