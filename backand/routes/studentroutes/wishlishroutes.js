
const express=require('express');
const app=express();
const Router = express.Router()
const {wishget,wishpost} = require("../../controllers/studentcontrollers/wishlishcontrollers")
Router.use(express.json())
Router.get("/",wishget);
Router.post("/",wishpost);


module.exports = Router;








