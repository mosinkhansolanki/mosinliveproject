



const mongoose = require('mongoose');
const employment= new mongoose.Schema({  

   empname:{
    type:String
},  
 
empemail:{
    type:String
},
empnumber:{
    type:String
},  
empdob:{
    type:String
},  

empaddress:{
    type:String
},     
   
                                      
   
})
 module.exports = mongoose.model('employment',employment);