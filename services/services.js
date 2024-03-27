const dbq=require('../models/models')
class serviceuser{
     static async registeruser(email,fullname,phonenumber,idpulse,willaya,password,age,grp,maladie){
       try{
       const par=new dbq({email,fullname,phonenumber,idpulse,willaya,password,age,grp,maladie})
       return await par.save()

       }catch(err){console.log(err)}
     }
    

      
    }

   
module.exports=serviceuser
