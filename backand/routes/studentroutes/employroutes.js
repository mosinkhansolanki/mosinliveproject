
const express=require('express');
const app=express();
const Router = express.Router()
const {employget,employpost,employput,employdelete} = require("../../controllers/studentcontrollers/employcontrollers")
Router.use(express.json())
Router.get("/",employget)
Router.post("/",employpost); 
 Router.put('/:_id',employput)
 Router.delete('/:_id',employdelete)


module.exports = Router;



