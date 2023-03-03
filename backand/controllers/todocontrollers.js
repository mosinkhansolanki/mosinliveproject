// const db = require('../config');
// db(); 
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const mongodb = require('mongodb');
const tudos = require('../model/todomodel');
const asyncHandler = require('express-async-handler');



const gettudo = async (req, res) => {
    let data = await tudos.find();
    console.log("======>", data);
    res.status(200).json(data)
}
const getMe = async (req, res) => {
    const {_id,fistname,lastname,email,phone,pincode,addess,password,state} = await tudos.findById(req.tudo._id)
    res.status(200).json({
        id: _id,
        fistname,
        lastname,
        email,
        addess,
        pincode,
        phone,
        password,
         state
    })
}








const posttudo = async (req, res) => {
    const {fistname,lastname,email,phone,pincode,addess,password,state}= req.body  

    
let data = await tudos.create({
    fistname,
    lastname,
    email,
    addess,
    pincode,
    phone,
    password,
     state


})


res.status(201).json({
    fistname:data.fistname,
    lastname: data.lastname,
    email:data.email,
    phone:data.phone,
    pincode:data.pincode,
    addess:data.address,
    token:generateToken(data._id)
})

  
}









const updates =async(req,res)=>{
       const  data = await tudos.findById(req.params._id)
       console.log("==================>",data)
        if(!data){
            res.status(401).json({massage:"id is not define"}) 
        }
     let updatedata = await tudos.findByIdAndUpdate(req.params._id,req.body,{
        new: true
     })
     console.log("=========>",updatedata)
    //  res.status(200).json({message : `updatedata ${req.params._id}`})
    res.status(200).json({
        token :generateToken({massage:`data is update `})
    })
}



const deletes = async(req,res)=>{
    const  data = await tudos.findById(req.params._id)
    if(!data){
        res.status(401).json({massage:"id is not define"}) 
    }
    if(generateToken){
        await data.remove()
    }


    res.status(200).json({
        token:generateToken(`{massage:data is delete${req.params.id}}`)
    })


}


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    gettudo,
    posttudo,
    updates,
    deletes,
    getMe

}