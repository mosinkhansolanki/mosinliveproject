

const mongoose = require('mongoose');
const countrycode = new mongoose.Schema({
   countrycode:{
       type:String 
   },  
   
   countryname:{
          type: String
   },
    countryschool: { 
        type: String

    }
   
   
   
})
 module.exports = mongoose.model('studentccountry',countrycode);