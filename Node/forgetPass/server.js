const express = require("express");
require("dotenv").config();
const connect = require("./config/db.js");
const route  = require("./routes/userRoute.js");
const PORT = process.env.PORT;

const app = express();
app.use(express.json())

app.use("/api/auth", route);

connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is runnibg on ${PORT}`)
    })
})
.catch((err)=>{
    console.log("unable to connect to server")
})