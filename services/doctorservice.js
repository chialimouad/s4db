const dbqa=require('../models/doctormodel')
const jwt =require('jsonwebtoken')
class servicedoctor{
    static async registerdoctor(email,fullname,phonenumber,Specialite,willaya,Age,password,data,name,contentType){
      try{
      const par=new dbqa({email,fullname,phonenumber,Specialite,willaya,Age,password,data,name,contentType})
      return await par.save()

      }catch(err){console.log(err)}
    }
    static async deleting(_id){
        
      const deleting=await dbqa.findOneAndDelete({_id})
      return deleting

     
    }
    static  async uploadPhoto(name, data, contentType) {
      try {
        const photo = new dbqa({
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

     static async generatetoken(tokendata,secretkey,jwt_expire){
       return jwt.sign(tokendata,secretkey,{expiresIn:jwt_expire})

     }
   }
   module.exports=servicedoctor