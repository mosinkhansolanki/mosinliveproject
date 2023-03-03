



const bcrypt = require("bcrypt")
const products= require('../../model/modelstudent/productmodel')
const asyncHandler = require('express-async-handler');
const { json } = require("express");




const productget = async (req, res) => {
    const data = await products.findById(req.params._id);
    res.status(200).json(data);
}   




const productpost= async (req, res) => {
    const {  produttitle, productdis, productprice, produtimage, produtrating,produtexp } = req.body;

        let data = await products.create({
            
            produttitle,
             productdis,
              productprice,
               produtimage, 
               produtrating,
               produtexp 


        })
        res.send(data)
        console.log("=================>",data);



    res.status(201).json({
        
        produttitle:data.produttitle,
        productdis:data.productdis,
         productprice:data.productprice,
          produtimage:data.produtimage, 
          produtrating:data.produtrating,
          produtexp:data.produtexp
    })

}   

    const productput=async(req,res)=>{
          
        const data = await products.findById(req.params._id)
          if(! data){
             res.status(200) 
              res.send("user not found")
          }
           const updatedata=await products.findByIdAndUpdate(req.params._id,req.body,{
             
              new: true
           }) 
             
           res.send(updatedata)  
           console.log("============>",updatedata);    
    }   

     const productdelete=async(req,res)=>{
          const data= await products.findById(req.params._id)
           
          if(! data){
             res.status(200).json({massage:"valid data"})
          } 
          await data.remove()
           res.status(200).json(`{massage:"invlid data"${req.params._id}}`)
     }  

      

module.exports = {

    productget,
    productpost,
    productput,
    productdelete
}