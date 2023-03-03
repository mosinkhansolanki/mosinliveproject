
const express=require('express');
const app=express();
const Router = express.Router()
const {courseget,coursepost,coursegets} = require("../../controllers/studentcontrollers/controllerstudentcourse")
Router.use(express.json())
Router.get("/",courseget);
Router.post("/",coursepost);
Router.get("/:_id",coursegets);


module.exports = Router;








