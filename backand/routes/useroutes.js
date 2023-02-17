
// const express=require('express');
// const router=express.Router();
// const {getuser, postuser, putuser, deleteuser} = require('../controllers/userroutes controllers')






// router.route('/').get(getuser).post(postuser)
// router.route('/:id').delete(deleteuser).put(putuser)




// module.exports=router;  


const express=require('express');
const router=express.Router();

const {getuser,postuser,putuser,deleteuser, loginserver}=require('../controllers/userroutescontrollers');


 router.get('/',getuser)  

 router.post('/',postuser)
router.put('/',putuser)
router.delete('/',deleteuser)
router.post("/login",loginserver)
// 
// route.route ('/').get(getuser).post(postuser);
// route.route ('/:_id').put(putuser).delete(deleteuser);


module.exports=router;