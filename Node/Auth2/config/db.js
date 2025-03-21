const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.MongoDB_URL;


const connection = mongoose.connect(DB_URL);

connection
.then(()=>console.log("connected to MongoDB"))
.catch((err)=>console.log("Unable to connect", err))

module.exports = {connection};