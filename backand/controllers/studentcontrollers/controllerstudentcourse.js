const bcrypt = require("bcrypt")
const courseuser= require('../../model/modelstudent/modelstudentcourse')
const asyncHandler = require('express-async-handler');
const { json } = require("express");



const courseget= async (req, res) => {
    let data = await courseuser.find();
    console.log("======>", data);
    res.status(200).json(data)
}


const coursepost  = async (req, res) => {
    const {course}=req.body
     let data= await courseuser.create({
         course   
     }) 
     res.send(data)

   
}   

const coursegets = async(req,res)=>{
    const data = await courseuser.findById(req.params._id);
    res.status(200).json(data);
}

    
 module.exports={ 
    courseget,
    coursepost,
    coursegets
     
 }