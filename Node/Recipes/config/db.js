const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;

const connect = async()=>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("Connected to MongoDB")
    }catch(err){
        console.log("Unable to connect to MongoDB",err);
        process.exit(1);
    }
}
module.exports = connect;