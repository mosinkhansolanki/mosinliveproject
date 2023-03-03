

const express=require('express');
const app=express();
const Router = express.Router()
const {productget,productpost,productput,productdelete} = require('../../controllers/studentcontrollers/productcontrollers');
// const router = require('../userauthroutes');
Router.use(express.json())
Router.get('/:_id',productget)
Router.post('/',productpost)
 Router.put('/:_id',productput)
 Router.delete('/:_id',productdelete)


module.exports = Router;



