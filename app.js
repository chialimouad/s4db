const app=require('./index')
const db =require('./config/db')
const db1 =require('./models/models')
const dbdoc =require('./models/doctormodel')

const userfecth = require('./controller/controller')

var port = process.env.PORT || 3000 
app.get('/1',(req,res)=>{
    res.send("userfecth.fetch")
})
app.listen(3000,()=>{
    console.log("start listening port 3000")
})
