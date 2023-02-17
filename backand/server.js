

// const express=require('express');
// const app=express();

// const dotenv=require('dotenv').config();
// const port=process.env.PORT || 5000;

// app.use('/api/user',require('./routes/useroutes'))


// app.get('/',(req,res)=>{
//     res.send("demo")
// })  


// app.listen(port,()=>{
//     console.log(port);
// })  

























const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


const { product } = require('./model/productmodel')
const { errorHandler } = require('./middleware/errormiddleware')

const port = process.env.PORT || 5000;
const db = require('./db');
db();
app.use(errorHandler);
app.use(express.json());
app.use('/api/use', require('./routes/useroutes'));
app.use('/api/product', require('./routes/productroutes')) 

app.get(',', (req, res) => {
    res.send("demo")
})


app.listen(port, () => {
    console.log(port);
})