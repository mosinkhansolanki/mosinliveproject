const {mongoose} = require('mongoose');
const userauthmode = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add an titel']
    },
    email:{
        type:String,
        required:[true,'plese add an dicription']
    },
    password:{
        type:Number,
        required:[true,'plese add an price']

    }
})
module.exports = mongoose.model("student",userauthmode) 







