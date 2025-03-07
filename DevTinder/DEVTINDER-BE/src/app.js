const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Welcome to Homepage")
})

app.get("/about",(req,res)=>{
    res.send("Hello Welcome to About Page")
})

app.get("/contact",(req,res)=>{
    res.send("Hello Welcome to Contact Page")
} )

app.listen(3000,()=>{
    console.log("Successfully running on server 3000")
})