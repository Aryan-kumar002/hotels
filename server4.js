const express = require('express')
const app = express();
const db= require('./db');

const person = require('./models/person');
app.get('/', function (req,res){
    res.send('welcome');
})

// POST route to add a person
app.post('/person',(req,res)=>{
const data = req.body // Assuming the request body conatins the person data

// create a new Person document using the Mongoose model
const newperson =  new person(data);

 // Save the new person to the database
 newperson.save((error,savedperson) =>{
if(error){
    console.log('Error saving person:', error);
    res.status(500).json({ error: ' Internal server error'})
}else{
    console.log('data saved successfully');
    res.status(200).json(savedperson);
}
 })
})

 app.listen(3001, ()=>{
    console.log('listening on port 3001');
 })