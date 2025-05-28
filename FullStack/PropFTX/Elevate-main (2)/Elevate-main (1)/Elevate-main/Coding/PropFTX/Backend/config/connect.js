require("dotenv").config();
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Unable to connect to database", error);
    process.exit(1);
  }
};

module.exports = connect;
