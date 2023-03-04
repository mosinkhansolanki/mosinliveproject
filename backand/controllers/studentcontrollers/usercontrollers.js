



const bcrypt = require("bcrypt")
const user= require('../../model/modelstudent/usermodel')
const asyncHandler = require('express-async-handler');
const { json } = require("express");




const userget = async (req, res) => {
    const data = await user.findById(req.params._id);
    res.status(200).json(data);
}   




// const userpost= async (req, res) => {
    // const {  name,email,number,profile,products,students,employe } = req.body;
// 
        // let data = await user.create({
            // 
            // name,
            // email,
            // number,
            // profile,
            // products,
            // students,
            // employe
// 
// 
        // })
        // res.send(data)
        // console.log("=================>",data);
// 
// 
// 
    // res.status(201).json({
        //  
        // name:data.name,
        // email:data.email,
        // number:data.number,
        // profile:data.profile,
        // products:data.products,
        // students:data.students,
        // employe:data.employe
        // 
    // })
// 
// }    

      

const userpost =async (req, res) => {
 const {  name,email,number,profile,products,students,employe } = req.body;
         

         if(!profile||!students||!employe||!products){
            let data=await user.create({
        
                name,
               email,
               number,                                                                             
               name

            }) 
            res.status(200).json(data)
     
         } 
         else{
              res.status(200).json({Error:"some thing is worng"})
         }
          
 }












    const userput=async(req,res)=>{
          
        const data = await user.findById(req.params._id)
          if(! data){
             res.status(200) 
              res.send("user not found")
          }
           const updatedata=await user.findByIdAndUpdate(req.params._id,req.body,{
             
              new: true
           }) 
             
           res.send(updatedata)  
           console.log("============>",updatedata);    
    }   

     const userdelete=async(req,res)=>{
          const data= await user.findById(req.params._id)
           
          if(! data){
             res.status(200).json({massage:"valid data"})
          } 
          await data.remove()
           res.status(200).json(`{massage:"invlid data"${req.params._id}}`)
     }  
 
      
      const userpostt=async(req,res)=>{

          try{ 
            const data=await user.findById(req.params._id) 
             
              if(!data){
                    res.status(404).json({Error:"data is missing"})
              }
              let result  =await user.findByIdAndUpdate(req.params._id,req.body,{new:true})
                  res.status(201).json(result) 
            }
               catch (Error){
                  
                  res.status(404).json(Error)
               
            }  
        }

          
          



                                    
      
    














module.exports = {

    userget,
    userpost,
    userput,
    userdelete,
    userpostt
}