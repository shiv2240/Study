const UserModel = require("../models/user.model.js");
const validator = require("validator");

module.exports.addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Please provide an email and name" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email" });
    }
    const existing = await UserModel.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = await UserModel.create({ name, email });
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.getAllUsers = async(req,res)=>{
  try{
    const users = await UserModel.find();
    if(!users || users.length ===0){
      return res.status(404).json({message:"No users found"});
    }
    res.status(200).json({message:"All users", users})
  }catch(err){
    res.status(500).json({ message: err.message });
  }
}