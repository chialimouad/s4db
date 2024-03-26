const dbq=require('../models/models')
class serviceuser{
     static async registeruser(email,fullname,phonenumber,idnumber,desc,Skills,grade){
       try{
       const par=new dbq({email,fullname,phonenumber,idnumber,desc,Skills,grade})
       return await par.save()

       }catch(err){console.log(err)}
     }
    

      
    }
   

module.exports=serviceuser
