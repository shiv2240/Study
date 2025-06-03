const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  p1: {
    type: String,
    required: true,
  },
  p2: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("UserData", UserData);
module.exports = Data;
