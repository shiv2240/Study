const mongoose = require("mongoose");

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    unique: true,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const UserModel = mongoose.model("User", User);
module.exports = UserModel;
