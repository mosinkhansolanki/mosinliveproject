

// const getuser= ('/',(req,res)=>{
//     res.status(200).json({massage:"get data"}) 
// }) 




// const postuser=('/',(req,res)=>{
//     res.status(200).json({massage:"set data"}) 
// })  

// const putuser=('/',(req,res)=>{
//     res.status(200).json({massage:"update data"}) 
// }) 

// const deleteuser=('/',(req,res)=>{
//     res.status(200).json({massage:"delete data"}) 
// }) 

// module.exports ={
//     getuser,
//     postuser,
//     putuser,
//     deleteuser

// } 


const mongodb = require('mongodb');
const main = require('../config');
const asynchandler = require('express-async-handler')
const connectdb = require("../model/usermodel")
const login = require('../model/usermodel2');







// 
// const getuser= asynchandler(async(req,res)=>{
// let data=await main();
//  let result= await data.find({}).toArray();
//  console.log(result);
// res.status(200).json(result)
// })



const getuser = asynchandler(async (req, res) => {
    let result = await connectdb.find({})
    console.log(result);
    res.status(200).json(result)
})





// const postuser= asynchandler(async(req,res)=>{
// let data =await main();
// let result=await data.insertOne({
//  name:req.body.name,
//  email:req.body.email,
//  password:req.body.password,
//  number:req.body.number
// })
// res.status(200).json(result)
// console.log(result);
// })
// 



const postuser = asynchandler(async (req, res) => {

    let result = await connectdb.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number
    })
    res.status(200).json(result)
    console.log(result);
})


//    const putuser=('/',async(req,res)=>{
//   const data =await main();
//   let result =await data.updateOne({name:"mosin"},{$set:req.body})
//    res.status(200)
//    res.send(result);
//    })
// 
const loginserver = (async (req, res) => {

    const { email, password } = req.body;
    const userExists = await login.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error('Email already exists')
    }
    const passexits = await login.findOne({ password })
    if (passexits) {
        res.status(400);
        throw new Error('Password already exists')
    }
    else {
        let result = await login.create({ email: req.body.email, password: req.body.password });
        res.status(200).json(result)
    }
})

const putuser = asynchandler(async (req, res) => {
    let result = await connectdb.findById(req.params._id);
    if (!result) {
        res.status(400);
        res.send("user not found");
    }
    const updateusers = await connectdb.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    res.send(updateusers)
    console.log("=====>", updateusers) 
})

 



// const deleteuser=asynchandler(async(req,res)=>{
// let data =await main()
// let result =await data.deleteOne(req.body)
// res.status(200).json(result)
// console.log(result);
// })  


const deleteuser = asynchandler(async (req, res) => {
    let result = await connectdb.deleteOne({ id: req.params._id })
    if (!result) {
        res.status(400)
        res.send("user not found")
    }
    await result.remove();
    res.status(200).json({ massage: `delete data ${req.params.id}` });
}) 



module.exports = {
    getuser,
    postuser,
    putuser,
    deleteuser,
    loginserver,

}