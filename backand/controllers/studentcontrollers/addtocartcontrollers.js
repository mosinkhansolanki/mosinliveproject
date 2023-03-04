



const bcrypt = require("bcrypt")
const addtocartt= require('../../model/modelstudent/addtocartmodel')
const asyncHandler = require('express-async-handler');
const { json } = require("express");




const addtoget = async (req, res) => {
    const data = await addtocartt.find({})
    res.status(200).json(data);
}   




const addtopost= async (req, res) => {
    const { quentity,title,dis,image,price,rating} = req.body;

        let data = await addtocartt.create({
            
            quentity,
            title,
            dis,
            image,
            price,
            rating


        })
        res.send(data)
        console.log("=================>",data);



    res.status(201).json({
        
        quentity:data.quentity,
         title:data.title,
         dis:data.dis,
         image:data.image,
         price:data.price,
         rating:data.rating
    })

}   


      

module.exports = {

  addtoget,
  addtopost
}