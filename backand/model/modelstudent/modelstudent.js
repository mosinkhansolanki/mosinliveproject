
const mongoose = require('mongoose');
const subject = new mongoose.Schema({
    subjectname:{
        type:String 
    },  


    
    
    


})   


module.exports = mongoose.model('studentsubject',subject);