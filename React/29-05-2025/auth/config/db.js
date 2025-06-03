const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("COnnect to mongo Database");
  } catch (err) {
    console.log("Unable to connect to databse", err);
  }
};
module.exports = connect;
