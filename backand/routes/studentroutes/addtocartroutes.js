
const express=require('express');
const app=express();
const Router = express.Router()
const {addtoget,addtopost} = require("../../controllers/studentcontrollers/addtocartcontrollers")
Router.use(express.json())
Router.get("/",addtoget);
Router.post("/",addtopost);


module.exports = Router;








