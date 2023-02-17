
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({

    title: { 
        type: String,
           required: [true ,'plese add title']
    },

    dis:{  type:String,
        
          required:[true ,'plese add dis'] 
    },


    price:{ type: String, 
        required: [true,'plese add price'] 
    },


    quentity:{  type:String , 
              required:[true ,'plese add quentity']
    },

});

module.exports = mongoose.model('products', UserSchema);