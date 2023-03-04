



const bcrypt = require("bcrypt")
const addtocartt= require('../../model/modelstudent//wishlishmodel')
const asyncHandler = require('express-async-handler');
const { json } = require("express");




const wishget = async (req, res) => {
    const data = await addtocartt.find({})
    res.status(200).json(data);
}   




const wishpost= async (req, res) => {
    const {  likeimage,title,dis,image,price,rating} = req.body;

        let data = await addtocartt.create({
            
            likeimage,
            title,
            dis,
            image,
            price,
            rating


        })
        res.send(data)
        console.log("=================>",data);



    res.status(201).json({
        
        likeimage:data. likeimage,
         title:data.title,
         dis:data.dis,
         image:data.image,
         price:data.price,
         rating:data.rating
    })

}   


      

module.exports = {

  wishget,
  wishpost
}