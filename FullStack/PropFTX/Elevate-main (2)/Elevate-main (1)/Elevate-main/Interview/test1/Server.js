const express = require("express")
const route = require("./config/route")
const connect = require("./config/connect")
const app = express()

app.use(express.json())
app.use(route)

connect()
.then(()=>{
    app.listen(2030,()=>{
        console.log("server is running")
    })
}).catch((err)=>{
    console.log("unable to run server", err)
})