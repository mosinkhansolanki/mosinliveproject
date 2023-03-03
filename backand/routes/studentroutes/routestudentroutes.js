
const express=require('express');
const app=express();
const Router = express.Router()
const {studentget,studentpost} = require("../../controllers/studentcontrollers/controllerstudentcontrollers")
Router.use(express.json())
Router.get("/",studentget);
Router.post("/",studentpost);


module.exports = Router;








