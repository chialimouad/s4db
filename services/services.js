const dbq=require('../models/models')
const dbqmeasure=require('../models/measure')

class serviceuser{
     static async registeruser(userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie){
       try{
       const par=new dbq({userId,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie})
       return await par.save()
          
       }catch(err){console.log(err)}
     }
     static async getbpm(id,Bpm){
      try{
      const par=new dbqmeasure({id,Bpm})
      return await par.save()
         
      }catch(err){console.log(err)}
    }

     static async getdata(userId){
      try{
      const goti=await dbq.find({userId})
      return goti

      }catch(err){console.log(err)}
    }
    static async deleting(_id){
      
      const deleting=await dbq.findOneAndDelete({_id})
      return deleting

     
    }
  
    static async generatetoken(tokendata,secretkey,jwt_expire){
      return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})

    }
    }

   
module.exports=serviceuser