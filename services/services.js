const dbqa=require('../models/models')
const db=require('../models/advice')
    const jwt =require('jsonwebtoken')
    class serviceuser{
      static async registeruser(email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata){
        try{
          const par=new dbqa({email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata})
          return await par.save()
  
        }catch(err){console.log(err)}
      }
      static async adviceregister(userId,createdat,advice){
        try{
          const par=new db({userId,createdat,advice})
          return await par.save()
  
        }catch(err){console.log(err)}
      }
      static async getbpm(Bpm,pulseid){
        try{
        const bpmg=new dbqa({Bpm,pulseid})
        return await bpmg.save()
           
        }catch(err){console.log(err)}
      }
  
       static async getdata(userId){
        try{
        const goti=await dbqa.find({userId})
        return goti
  
        }catch(err){console.log(err)}
      }
      static async deleting(_id){
        
        const deleting=await dbqa.findOneAndDelete({_id})
        return deleting
  
       
      }
   

       
    
         static async generatetoken(tokendata,secretkey,jwt_expire){
           return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    
         }
       }
       
module.exports=serviceuser