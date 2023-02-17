const mongoose = require("mongoose")
const studentscema=new mongoose.Schema({
    email:String,
    password: Number
}); 

module.exports=mongoose.model('dataaas',studentscema)
