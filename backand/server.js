
const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


const { product } = require('./model/productmodel')
const { errorHandler } = require('./middleware/errormiddleware')

const port = process.env.PORT || 5000;
const db = require('./db');
db();
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler);
app.use(express.json());

app.use('/api/use', require('./routes/useroutes'));
app.use('/api/product', require('./routes/productroutes'))
app.use('/api/userAuth', require('./routes/userauthroutes'));
app.use('/api/usertodo',require('./routes/todoroutes'))
app.use("/api/userstudent",require("./routes/studentroutes/routestudentroutes"))
app.use("/api/studentcountry",require("./routes/studentroutes/routestudentcontry"))
app.use('/api/studentcourse',require('./routes/studentroutes/routesstudentcourse'))
app.use('/api/studentsingup',require('./routes/studentroutes/routesingup'))
app.use('/api/studentprofile',require('./routes/studentroutes/profileroutes'))
app.use('/api/studentemploy',require('./routes/studentroutes/employroutes'))
app.use('/api/studentproduct',require('./routes/studentroutes/productroutes'))
app.use('/api/desbord',require('./routes/desbord'))
app.use('/api/studentuser',require('./routes/studentroutes/userroutes'))
app.use('/api/studentwishlish',require('./routes/studentroutes/wishlishroutes'))
app.use('/api/studentaddtocart',require('./routes/studentroutes/addtocartroutes'))
const multer = require('multer');
const path = require('path');
app.use('/uplode', express.static('image'))

const storage = multer.diskStorage({
    destination: "./image",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname} ${Date.now()} ${path.extname(file.originalname)}`)
     }
})
const uplode = multer({
    storage: storage
})
app.post('/uplode', uplode.single('profile'), (req, res) => {

    console.log(req.file);
     res.json({

         sussess: 1,
        profile_url: `http://localhost:8000/uplode/${req.file.filename}`

     })


  }) 




app.listen(port, () => {
    console.log(port);
}) 

