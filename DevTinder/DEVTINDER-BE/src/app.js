const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user")


app.post("/signup",async (req,res)=>{
  const user = new User({
    firstName : "Virat",
    lastName : "Kohli",
    emailID : "svirat1254@gmail.com",
    password : "xyz1"
  })
  try{
    await user.save()
  res.send("User added successfully")
  }catch(err){
    res.status(400).send("Error"+ err.messgae)
  }
})


connectDB()
  .then(() => {
    console.log("Database connectuon established");
    app.listen(2000, () => {
        console.log("Successfull server working");
      });
  })
  .catch((err) => {
    console.error("Database cannot conneted");
  });


