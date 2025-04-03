const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed"],   
        default:"pending"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const UserSchema = mongoose.model("ToDo", todoSchema);
module.exports = UserSchema;