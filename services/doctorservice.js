const dbqa=require('../models/doctormodel')

class servicedoctor{
    static async registerdoctor(email,fullname,phonenumber,specialite,willaya,Age,password){
      try{
      const par=new dbqa({email,fullname,phonenumber,specialite,willaya,Age,password})
      return await par.save()

      }catch(err){console.log(err)}
    }
   

     
   }
   module.exports=servicedoctor