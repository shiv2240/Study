const express = require("express");
require("dotenv").config();
const connect = require("./config/db.js")
const route = require("./routes/userRouter.js")
const PORT = process.env.PORT

const app = express();
app.use(express.json())
app.use("/auth", route)

    connect()
    .then(()=>{
        app.listen(PORT,()=>{
            console.log(`This server is running on ${PORT}`)
        })
    })
    .catch((err)=>{
        console.log("Error to connect server", err)
    })
