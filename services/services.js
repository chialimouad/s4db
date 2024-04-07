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


 static  async uploadPhoto(name, data, contentType) {
    try {
      const photo = new dbim({
        name,
        data,
        contentType
      });
      await photo.save();
      return { status: true, message: 'Photo uploaded successfully.' };
    } catch (error) {
      console.error('Error uploading photo:', error);
      return { status: false, message: 'Error uploading photo.' };
    }
  }

  static async getAllPhotos() {
    try {
      const photos = await dbim.find();
      return { success: true, photos };
    } catch (error) {
      console.error('Error fetching photos:', error);
      return { success: false, message: 'Error fetching photos.' };
    }
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
   

       
    
         static async generatetoken(tokendata,secretkey,jwt_expire){
           return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})
    
         }
       }
       
module.exports=serviceuser