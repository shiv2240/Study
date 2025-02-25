const express = require("express");


const app = express();


app.get("/",(req,res)=>{
    res.send("Homepage");
});

app.get("/hello",(req,res)=>{
    res.send("Hello AEEEE haalo!");
});


app.get("/test",(req,res)=>{
    res.send("Hello from server!");
});
app.listen(2000, ()=>{
    console.log("Successfull server working");
});