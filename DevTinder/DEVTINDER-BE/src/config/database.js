const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shivsahni2240:e51j4i1P2qxscoYZ@myplace.moobold.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
