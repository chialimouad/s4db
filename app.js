const app=require('./index')


const userfecth = require('./controller/controller')

var port = process.env.PORT || 5555 
app.get('/1',(req,res)=>{
    res.send("userfecth.fetch")
})
app.listen(3000,()=>{
    console.log("start listening port 3000")
})
