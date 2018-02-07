const express =require('express')
const path = require('path')
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
//app.use('/private',require('./routes/private'))
app.use('/', express.static(path.join(__dirname, 'public')))
/*app.get('/',(req,res)=>{
    console.log("hi")
    //send the main page
    res.sendfile('public/index.html',{root:__dirname})
})*/
app.use('/routes/users',(req,res)=>{
    console.log("jhello")
  res.send(req.body)
})


app.listen(3434,()=>{
    console.log("server is listening at http://localhost:3434/")
})