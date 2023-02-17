
const express = require('express');
const app = express();
app.use(express.json());
const db = require('./config')






app.get('/', async (req, res) => {
   const data = await db();
   let result = await data.find({}).toArray()
   res.send(result);
   console.log(result);
})


app.post('/', async (req, res) => {
    const data=  await db();
    let result=await data.insertOne({name:"ikbal",class:"node.js"})
    res.send(result);
    console.log(result);

})


app.put('/', async (req, res) => {
   const data= await db();
   let result= await data.updateOne({name:"ikbal"},{$set:req.body}) 
   res.send(result);
   console.log(result);
})


app.delete('/', async (req, res) => {
  const data=await db();
  let result=await data.deleteOne({name:"ayan"})
  res.send(result);
  console.log(result);
})

app.listen(5000)



