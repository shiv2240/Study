const User = require("../models/userModel.js")

module.exports.createUser = async(req,res)=>{
    try{
        const {name, email, password} = req.body;
        const user = await User.create({name,email,password})
        res.status(201).json({ message: "User created Successfully", user });
    }catch(err){
        res.status(500).json({message:"Error while creating user", err})
    }
}

module.exports.getUser = async(req,res)=>{
    try{
        const user = await User.find({})
        res.status(201).json({ message: "All Users fetched Successfully", user });
    }catch(err){
        res.status(500).json({message:"Error while getting all users", err})
    }
}

module.exports.updateUser= async(req,res)=>{
    try{
        const {id}= req.params;
        const {name, email, password} = req.body;
        const user = await User.findByIdAndUpdate(id, {name, email, password}, {new:true})
        if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
        res.status(201).json({ message: "User updated Successfully", user });
    }catch(err){
        res.status(500).json({message:"Error while updating the users", err})
    }
}

module.exports.deleteUser = async(req,res)=>{
    try{
        const {id} = req.params;
        const user = await User.findById(id)
        res.status(201).json({ message: "User deleted Successfully", user });
    }catch(err){
        res.status(500).json({message:"Failed to delete the user", err})
    }
}