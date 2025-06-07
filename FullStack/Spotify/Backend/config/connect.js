const mongoose = require("mongoose")
require("dotenv").config()

const MONGODB_URI = process.env.MONGODB_URI

const connect = async() =>{
   try{
     await mongoose.connect(MONGODB_URI)
    console.log("Connected to Database")
   }
   catch(err){
    console.error("Error while coinnecting ton database",err)
   }
}
module.exports = connect