



const mongoose = require('mongoose');
const addtocart= new mongoose.Schema({  

    quentity:{
    type:String
},  
title:{
    type:String
},
dis:{
    type:String
},  
image:{
    type:String
},  

price:{
    type:String
},   

rating:{
    type:String
},  
    
                                      
   
})
 module.exports = mongoose.model('addtocart',addtocart);