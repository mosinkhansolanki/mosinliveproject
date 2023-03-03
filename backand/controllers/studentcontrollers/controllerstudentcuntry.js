  
const bcrypt = require("bcrypt")
const country = require('../../model/modelstudent/modelcuntrycode')
const asyncHandler = require('express-async-handler');



const countryget= async (req, res) => {
    let data = await country.find();
    console.log("======>", data);
    res.status(200).json(data)
}


const countrypost = async (req, res) => {
    const {countrycode,countryname,countryschool}=req.body

     let data= await country.create({
         countrycode,
         countryname,
         countryschool
     }) 
     res.send(data)

   
}   

const schoolcuntrypost= async (req, res) => {
    const {countrycode,countryname}=req.body

     let data= await country.findOne({countryname})
         JSON.stringify(data) 
      
          if( data.countrycode|| data.countryname) {
             res.status(400).json({
                   countryschool: data.countryschool
             }) 
             res.send(data)
          }

    
}  

 module.exports={
    countryget,
    countrypost,
    schoolcuntrypost
 }