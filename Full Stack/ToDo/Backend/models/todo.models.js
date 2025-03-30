const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    task:{type:String, required:true},
    status:{type:String, enum:["pending","completed"], default:"pending"},
    createdAt:{type:Date, default:Date.now}
})

const Todo = mongoose.model("users", todoSchema)

module.exports = {Todo};