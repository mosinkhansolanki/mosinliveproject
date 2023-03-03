
const mongoose = require('mongoose');
const connectdb = async () => {
    try {
        const condb = await mongoose.connect(process.env. MONGO_URL);
        console.log("hello this result==>",connectdb);
         console.log("mosin khan solanki");
    }
    catch (err) {
        console.log(err);
        process.exit(1);
 
    }
}

module.exports = connectdb;