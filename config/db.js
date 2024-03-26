const mongoose=require('mongoose')
const connection = mongoose.createConnection('mongodb+srv://Mouad:mouadchiali@projets4.o9xgxx9.mongodb.net/Patients').on('open',()=>{
    console.log("connected")
}).on('error',()=>{
    console.log("not connected")
})
module.exports=connection
