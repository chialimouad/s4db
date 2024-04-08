const dbqa=require('../models/models')
const db=require('../models/advice')
const dbim=require('../models/imagemodel')

    const jwt =require('jsonwebtoken')
    class serviceuser{
      static async registeruser(email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata){
        try{
          const par=new dbqa({email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata})
          return await par.save()
  
        }catch(err){console.log(err)}
      }







      static async adviceregister(userId,advice){
        try{
          const par=new db({userId,advice})
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
      static async updating(_id,email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata){
        const par=new dbqa({email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata})

        const updating=await dbqa.findByIdAndUpdate({_id,par})
        return updating
  
       
      }
      static async finding(fullname){
        
        const finding=await dbqa.findOne({fullname})
        return finding
  
       
      }

       
    
         static async generatetoken(tokendata,secretkey,jwt_expire){
           return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    
         }
       }
       
module.exports=serviceuser