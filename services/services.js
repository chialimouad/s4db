const dbqa=require('../models/models')
    const jwt =require('jsonwebtoken')
    class serviceuser{
      static async registeruser(userId,email,fullname,phonenumber,willaya,password,Age,Grp,maladie){
        try{
          const par=new dbqa({userId,email,fullname,phonenumber,willaya,password,Age,Grp,maladie})
          return await par.save()
  
        }catch(err){console.log(err)}
      }
    //   static async getbpm(idpulse,Bpm){
    //     try{
    //     const bpmg=new dbqa({idpulse,Bpm})
    //     return await bpmg.save()
           
    //     }catch(err){console.log(err)}
    //   }
  
       static async getdata(userId){
        try{
        const goti=await dbqa.find({userId})
        return goti
  
        }catch(err){console.log(err)}
      }
    //   static async deleting(_id){
        
    //     const deleting=await dbqa.findOneAndDelete({_id})
    //     return deleting
  
       
    //   }
    //    static async updating(_id,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie){
        
    //    const updating=await dbqa.findOneAndUpdate({_id,email,fullname,phonenumber,idpulse,willaya,password,Age,Grp,maladie})
    //     return await updating.save()
  
       
    //  }
       
    
         static async generatetoken(tokendata,secretkey,jwt_expire){
           return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    
         }
       }
       
module.exports=serviceuser