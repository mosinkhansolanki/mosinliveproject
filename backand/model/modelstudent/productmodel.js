



const mongoose = require('mongoose');
const product= new mongoose.Schema({  

    produttitle:{
    type:String
},  
productdis:{
    type:String
},
productprice:{
    type:String
},  
produtimage:{
    type:String
},  

produtrating:{
    type:String
},   

produtexp:{
    type:String
},  
    
                                      
   
})
 module.exports = mongoose.model('productstudent',product);