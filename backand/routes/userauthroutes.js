const express = require('express');
const router = express.Router();
router.use(express.json())
const { registerUser, loginUser, getMe,putuser,deleteuser} = require('../controllers/userauthcontorler');
const { route } = require('./productroutes');
const {protect}=require('../middleware/authmiddleware');
router.post('/mee',registerUser);
router.post('/login',loginUser);
router.get('/me',protect,getMe);
router.put('/:_id',putuser)
router.delete('/:_id',deleteuser)
module.exports=router;

