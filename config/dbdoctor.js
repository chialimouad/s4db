const mongoose=require('mongoose')
const connection = mongoose.createConnection('mongodb+srv://chialiabderahmene:mouadchiali@s4dbdesktopapp.wsjylzg.mongodb.net/doctors').on('open',()=>{
    console.log("connected")
}).on('error',()=>{
    console.log("not connected")
})
module.exports=connection