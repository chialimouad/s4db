const dbqa=require('../models/doctormodel')

class servicedoctor{
    static async registerdoctor(email,fullname,phonenumber,specialite,willaya,age,password){
      try{
      const par=new dbqa({email,fullname,phonenumber,specialite,willaya,age,password})
      return await par.save()

      }catch(err){console.log(err)}
    }
   

     
   }
   module.exports=servicedoctor