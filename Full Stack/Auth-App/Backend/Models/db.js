const mongoose = require("mongoose");

const mongo_url = process.env.mongo_url

mongoose.connect(mongo_url)
.then(()=>{
    console.log("Mongo COnnected")
}).catch((err)=>{
    console.log("Error to connect")
})