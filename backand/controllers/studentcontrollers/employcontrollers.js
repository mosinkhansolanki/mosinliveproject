



const bcrypt = require("bcrypt")
const employment= require('../../model/modelstudent/employmodel')
const asyncHandler = require('express-async-handler');
const { json } = require("express");




const employget = async (req, res) => {
    const data = await employment.find(req.body);
    res.status(200).json(data);
}




const employpost= async (req, res) => {
    const { empname, empemail, empnumber, empdob, empaddress } = req.body

        let data = await employment.create({
            
            empname,
             empemail,
              empnumber, 
              empdob,
               empaddress


        })
        res.send(data)



    res.status(201).json({
        empname:data.empname,
        empemail:data.empemail,
        empnumber:data.empnumber,
        empdob:data.empdob,
        empaddress:data.empaddress,

    })

}   

    const employput=async(req,res)=>{
          
        const data = await employment.findById(req.params._id)
          if(! data){
             res.status(200) 
              res.send("user not found")
          }
           const updatedata=await employment.findByIdAndUpdate(req.params._id,req.body,{
             
              new: true
           }) 
             
           res.send(updatedata)  
           console.log("============>",updatedata);    
    }   

     const employdelete=async(req,res)=>{
          const data= await employment.findById(req.params._id)
           
          if(! data){
             res.status(200).json({massage:"valid data"})
          } 
          await data.remove()
           res.status(200).json(`{massage:"invlid data"${req.params._id}}`)
     }  

      


     
     
     














module.exports = {

    employget,
    employpost,
    employput,
    employdelete
}