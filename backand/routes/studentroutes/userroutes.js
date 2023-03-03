

const express=require('express');
const app=express();
const Router = express.Router()
const {userget,userpost,userput,userdelete} = require('../../controllers/studentcontrollers/usercontrollers');
// const router = require('../userauthroutes');
Router.use(express.json())
Router.get('/:_id',userget)
Router.post('/',userpost)
 Router.put('/:_id',userput)
 Router.delete('/:_id',userdelete)

module.exports = Router;



