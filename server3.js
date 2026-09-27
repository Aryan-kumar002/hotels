const express = require('express')
const mongoose= require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost:27017/mydatabase').then(()=>{
    console.log('Mongodb Connected successfully')
})
.catch((err) => {
console.log(err)
})
app.get('/',function(req,res){
    res.send(' welcome ')
})
app.get('/chicken',(req,res)=>{
res.send('sure sir , i would love ot serve chicken')
})
app.get('/idli',(req,res)=>{
    var customized_idli={
     name:'rava idli',
       size: '10cm diameter',
       is_sambhar:true, 
       is_chutney:false
    }
    res.send(customized_idli)
})
app.listen(3001,()=>{
    console.log('listening on port 3001');
});