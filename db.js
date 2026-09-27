const mongoose = require('mongoose');

// define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/mydatabase'  // replace mydatabase with your database

// set up mongodb connection
mongoose.connect(mongoURL);

// get the default connection
// Mongoose maintains a default connection object represnting the Mongodb connection
const db = mongoose.connection;

// define event listeners for database connection
db.on('connected',()=>{
    console.log('connected to MongoDB server');
});

db.on('error',(err)=>{
    console.log('MongoDB connection error:',err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
});

// exports the database connection
module.exports = db; 