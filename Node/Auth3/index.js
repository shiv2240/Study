const express = require("express");
const { connection } = require("./config/db");
const { UserModel } = require("./model/userModel");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const AuthMiddleware = (req,res,next)=>{
    const { token } = req.query;
  jwt.verify(token, "mykey", function (err, decoded) {
    if (err) {
      res.send("pleae lofin first");
    } else {
      next();
    }
  });
}

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExist = await UserModel.findOne({ email: email });
    if (userExist) {
      res
        .status(400)
        .json({ message: "User already exists, please try new mail" });
    }
    await UserModel.create({ name, email, password });
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    console.log("Error while creating the user", err);
    res.status(500).json({ message: "Please try again later" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email, password: password });
    if (user) {
      const token = jwt.sign({ userID: user._id }, "mykey");
      res.status(201).json({ message: "Login successful", token: token });
    } else {
      res.status(404).json({ message: "Please signup first" });
    }
  } catch (err) {
    console.log("Error while creating the user", err);
    res.status(500).json({ message: "Please try again later" });
  }
});
app.use(AuthMiddleware)

app.get("/protected-endpoint",AuthMiddleware, (req, res) => {
    res.send("Protected data......");
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("COnnection failed");
  }
  console.log("listening in port 8080");
});
