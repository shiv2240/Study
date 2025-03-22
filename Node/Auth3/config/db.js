require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.MONGODB_URL;

const connection = mongoose.connect(DB_URL);

module.exports = { connection };
