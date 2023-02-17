const mongoose = require("mongoose")
const studentscema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    number: String,
}); 

module.exports=mongoose.model('data',studentscema)

