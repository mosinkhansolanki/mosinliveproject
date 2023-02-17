
const express = require('express');
const route = express.Router();
 
const{getuser,postuser,putuser,deleteuser}=require('../controllers/productcontrollers')



route.route ('/').get(getuser).post(postuser);
route.route ('/:_id').put(putuser).delete(deleteuser);




module.exports=route;






















