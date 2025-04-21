const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MONGO Database");
  } catch (err) {
    console.log("Unable to connect to Database", err);
  }
};
module.exports = connect;
