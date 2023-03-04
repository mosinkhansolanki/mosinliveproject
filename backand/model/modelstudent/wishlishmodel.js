



const mongoose = require('mongoose');
const wishlish= new mongoose.Schema({  

    likeimage:{
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
 module.exports = mongoose.model('wishlis',wishlish);