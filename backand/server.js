
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

