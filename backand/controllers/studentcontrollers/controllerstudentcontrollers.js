
const bcrypt = require("bcrypt")
const studentuser = require("../../model/modelstudent/modelstudent")
const asyncHandler = require('express-async-handler')



const studentget = async (req, res) => {
    let data = await studentuser.find();
    console.log("======>", data);
    res.status(200).json(data)
}


const studentpost= async (req, res) => {
    const {  studentname}=req.body;

       let data = await products.create({
            
            studentname


        })
        res.send(data)
        console.log("=================>",data);



    res.status(201).json({
        
        studentname:data.studentname
    })

}   

     

 module.exports={
    studentget,
    studentpost
 }



