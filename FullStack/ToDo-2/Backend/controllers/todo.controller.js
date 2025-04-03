const UserSchema = require("../models/todo.model.js");

module.exports.getToDo = async (req, res) => {
  try {
    const todo = await UserSchema.find();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports.saveToDo = async(req,res)=>{
    try{
        const {title, status, createdAt} = req.body;
        const newToDo = await UserSchema.create({title, status, createdAt});
        res.status(201).json({message:"ToDo Created", newToDo});
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports.deleteToDo = async(req,res)=>{
    try{
        const {id} = req.params;
        const todo = await UserSchema.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: "ToDo not found" });
          }
      
        res.status(200).json({message:"ToDo Deleted", todo});
    }catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports.updateToDo = async(req,res)=>{
    try{
        const {id} = req.params;
        const {title, status} = req.body;
        const todo = await UserSchema.findByIdAndUpdate(id,{title, status}, {new:true});
        if (!todo) {
            return res.status(404).json({ message: "ToDo not found" });
          }
        res.status(200).json({message:"ToDo Updated", todo});
    }catch(err){
        res.status(500).json({ message: err.message });
    }

}