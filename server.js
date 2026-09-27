/* function callback(){
     console.log('now adding is successfully completed');
 }
 const add = function(a, b, callback){
     var result = a+b;
   console.log('result: '+result); // main function work complete
   callback();
 }
 add(3,4, callback); */
 const add = function(a,b,javascript){
    var result = a+b;
    console.log('result:' +result);
    javascript();
 }

const notes = require('./notes.js');
var _=require('lodash'); 

console.log('server file is available ');

var age = notes.age;
var result= notes.addNumber(age+18,10);

console.log(age);
console.group('result is now '+result);

var data=["person","person",1,2,1,2,'name','age','2'];
var filter = _.uniq(data);
console.log(filter);

console.log(_.isString('prince'));
console.log(_.isString(3));