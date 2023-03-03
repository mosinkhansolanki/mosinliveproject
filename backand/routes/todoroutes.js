const express=require('express');
const app=express();
const Router = express.Router()
const {gettudo,getMe,updates,deletes,posttudo} = require("../controllers/todocontrollers")
Router.use(express.json())
const {protect} = require("../middleware/authmiddleware")
Router.get("/",gettudo);
Router.get("/token",protect,getMe)
Router.post("/",posttudo);
Router.put("/:_id",protect,updates);
Router.delete("/:_id",protect,deletes)



module.exports = Router;