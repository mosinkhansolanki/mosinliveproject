



const mongoose = require('mongoose');
const users= new mongoose.Schema({  

    name:{
    type:String
},  
email:{
    type:String
},
number:{
    type:String
},  
profile:{
    type:String
},  

products:{
    type:String
},   

students:{
    type:String
},   
employe:{
    type:String
},  
    
                                      
   
})
 module.exports = mongoose.model('studentuser',users);