const express = require("express");

const app = express();

const adminAuth = require("./middlewares/auth");
const userAuth = require("./middlewares/auth");

app.get("/", (req, res, next) => {
  next()
});


app.use((err,req,res,next)=>{
    if(err){
        res.status(500).send("Incorrect credentials")
    }else{
        next();
    }
})

app.use((req,res)=>{
    res.send("You passed!")
})
// app.use("/admin", adminAuth, userAuth)

// app.get("/user/:userId/:password",(req,res)=>{
//     console.log(req.params)
//     res.send([{
//         firstName:"Shiv",
//         lastName:"Sahni"
//     },{
//         firstName:"Shubham",
//         lastName:"Kumar"
//     }])
// })

// app.get("/user",(req,res)=>{
//     res.send("You are on ab and ac")
// })

// app.post("/user",(req,res)=>{
//     res.send("Data Saved Successfully")
// })

// app.delete("/user",(req,res)=>{
//     res.send("Data deleted successfully")
// })


app.listen(2000, () => {
  console.log("Successfull server working");
});
