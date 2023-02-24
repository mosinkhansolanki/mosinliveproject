
const express=require('express');
const app=express();

const multer=require('multer') 


const fileuplod= multer({
    storage: multer.diskStorage({
        destination: function(res,file,cb){
            cb(null,'photo')
        },
        filename:function(res,file,cb){
            cb(null,file +"" + this.filename +".jpg")
        }
    
    })
}).single("data") 


app.post('/',fileuplod,(req,res)=>{
      res.send("single")
}) 
  app.listen(5000)