
//const { json } = require('express')
const product = require('../model/productmodel')

const getuser = async (req, res) => {
    let data = await product.find({})
    res.send(data)

}

// const postuser = async (req, res) => {
// let data = await product.create({
// 
// title: req.body.title,
// dis: req.body.dis,
// price: req.body.price,
// quentity: req.body.quentity
// })
// res.send(data)
// console.log(data);
// } 


const postuser = async (req, res) => {
    const { title, dis, price, quentity } = req.body

    if (!title && !dis && !price && !quentity){
         res.status(400)
        //  throw new Error("please add all filds")
    } 
    const data= await product.create({
        title: req.body.title,
        dis:req.body.dis,
         price: req.body.price,
         quentity: req.body.quentity
    })   
      res.status(200).json({massage:"valid data",data}) 

  }  


const putuser = async (req, res) => {
    let data = await product.findById(req.params._id)

    if (!data) {
        res.status(400);
        res.send("user not found");
    }
    const updateusers = await product.findByIdAndUpdate(req.params._id, req.body, {
        new: true
    })
    res.send(updateusers)
    console.log("=====>", updateusers)
}


const deleteuser = async (req, res) => {
    let result = await product.findById(req.params._id)
    if (!result) {
        res.status(400)
        res.send("user not found")
        throw new Error ('plese add a all body filds')
    }
    await result.remove();
    res.status(200).json({ massage: `delete data ${req.params._id}` })
}


module.exports = {
    getuser,
    postuser,
    putuser,
    deleteuser
}














