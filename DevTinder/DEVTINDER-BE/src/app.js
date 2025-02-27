const express = require("express");


const app = express();


app.get("/",(req,res)=>{
    res.send("Homepage");
});

app.get("/user/:userId/:password",(req,res)=>{
    console.log(req.params)
    res.send([{
        firstName:"Shiv",
        lastName:"Sahni"
    },{
        firstName:"Shubham",
        lastName:"Kumar"
    }])
})

app.get("/ab?c",(req,res)=>{
    res.send("You are on ab and ac")
})

app.post("/user",(req,res)=>{
    res.send("Data Saved Successfully")
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted successfully")
})

app.get("/hello",(req,res)=>{
    res.send("Hello AEEEE haalo!");
});


app.get("/test",(req,res)=>{
    res.send("Hello from server!");
});
app.listen(2000, ()=>{
    console.log("Successfull server working");
});