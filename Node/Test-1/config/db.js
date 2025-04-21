const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Server connected successfully");
  } catch (err) {
    console.log("Error connecting with server", err);
  }
};

module.exports = connect;
