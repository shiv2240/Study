const express = require("express");
require("dotenv").config();
const app = express()
const PORT = process.env.PORT;
const connect = require("./config/db.js")
app.use(express.json())


connect()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on ${PORT}`)
    })
})
.catch((err)=>{
    console.log("Unable to connect to server",err)
})