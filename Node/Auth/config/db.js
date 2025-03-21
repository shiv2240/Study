require("dotenv").config();
const mongoose = require("mongoose");

const DB_URL = process.env.MongoDB_URL;

const connection = mongoose.connect(DB_URL);
connection
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.log("MongoDB Connection Failed!", err));

module.exports = { connection };
