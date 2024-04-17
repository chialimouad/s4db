const dbqa=require('../models/models')
const db=require('../models/advice')
const dbim=require('../models/imagemodel')
const dbsignup=require('../models/usersignup')
const DataModel=require('../models/bpm')


    const jwt =require('jsonwebtoken')
    class serviceuser{
      static async registeruser(email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata,docname){
        try{
          const par=new dbqa({email,fullname,phonenumber,maladie,willaya,Age,password,userId,Grp,idpulse,Gender,mld,moredata,docname})
          return await par.save()
  
        }catch(err){console.log(err)}
      }
      static async registeruseralone(email,fullname,phonenumber,maladie,willaya,Age,password,Grp,Gender,mld,moredata){
        try{
          const par=new dbsignup({email,fullname,phonenumber,maladie,willaya,Age,password,Grp,Gender,mld,moredata})
          return await par.save()
  
        }catch(err){console.log(err)}
      }





  
      static async adviceregister(advice,userId,docname){
        try{
          const par=new db({advice,userId,docname})
          return await par.save()
  
        }catch(err){console.log(err)}
      }
      static async getbpm(Bpm,pulseid){
        try{
        const bpmg=new dbqa({Bpm,pulseid})
        return await bpmg.save()
           
        }catch(err){console.log(err)}
      }
      static async getadvice(){
        try{
        const goti=await db.find({})
        return goti
  
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
      static async updating(_id,updatedata){

        try {
          const updating=await dbqa.findByIdAndUpdate(_id,updatedata,{new:true,useFindAndModify:false})
        return updating
        } catch (error) {
          throw error
        }
  
       
      }
      static async finding(fullname){
        
        const finding=await dbqa.findOne({fullname})
        return finding
  
       
      }

       
    
         static async generatetoken(tokendata,secretkey,jwt_expire){
           return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    
         }

         static async saveData(sensorValue) {
          try {
            const newData = new DataModel({ sensorValue });
            await newData.save();
            console.log('Data saved to MongoDB:', newData);
            return newData;
          } catch (err) {
            console.error('Error saving data to MongoDB:', err);
            throw err;
          }
        }
       }
       
module.exports=serviceuser