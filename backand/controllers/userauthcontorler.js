const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../model/userauthmodel')
const asyncHandler = require('express-async-handler')
const { use } = require('../routes/productroutes')

const registerUser = asyncHandler(async (req, res) => {
const { name, email, password } = req.body;
if (!name || !email || !password) {
res.status(400)
throw new Error("Please add all fields")
}
const userExists = await User.findOne({ email })
if (userExists) {
res.status(400) 
throw new Error("User already exists") 

} else{
    
    // console.log("wertyu====>>>",password.length); 
    if(password.length >8 || password.length <8){

        res.status(400)
        throw new Error("password lenght should be minimum * charactor")
    }
}  
 let ceckemail =email.includes("@gmail.com") 
 if(!ceckemail){
    res.status(400)
    throw new Error ('plese add the @gmil.com')
 }

const user = await User.create({
name,
email,
password
})

if (user) {
res.status(201).json({
_id: user.id,
name: user.name,
email: user.email,
token: generateToken(user._id)

})
}

else {
res.status(400)
throw new Error('Invalid User  Data')
}
})


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (user && (bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})





const getMe = asyncHandler(async (req, res) => {
    
    const {_id,name,email}=await User.findById(req.user.id) 
    res.status(200).json({
        id: _id,
        name,
        email
    })  
    
})  

const putuser = asyncHandler(async(req,res)=>{
    const  data = await User.findById(req.params._id)
     if(!data){
         res.status(401).json({massage:"id is not define"}) 
     }
  let updatedata = await User.findByIdAndUpdate(req.params._id,req.body,{
     new: true
  })
  console.log("=========>",updatedata)
  res.status(200).json({message : `updatedata ${req.params._id}`})
 res.status(200).json({
     token :generateToken({massage:`data is update `})
 })
})




const deleteuser = asyncHandler(async(req,res)=>{
 const  data = await User.findById(req.params._id)
 if(!data){
     res.status(401).json({massage:"id is not define"}) 
 }
 if(generateToken){
     await data.remove()
 } 
})

 
    
      




 const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    loginUser,
    getMe ,
     putuser,
     deleteuser,
}



