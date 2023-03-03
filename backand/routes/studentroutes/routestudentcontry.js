

const express=require('express');
const app=express();
const Router = express.Router()
const {countryget,countrypost,schoolcuntrypost} = require("../../controllers/studentcontrollers/controllerstudentcuntry");
const { route } = require('../productroutes');
Router.use(express.json())
// const {protect} = require("../middleware/authmiddleware")
Router.get("/",countryget);
Router.post("/",countrypost);
Router.post("/country",schoolcuntrypost)


module.exports = Router;

