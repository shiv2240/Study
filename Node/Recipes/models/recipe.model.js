  const mongoose = require("mongoose");

  const Recipe = mongoose.Schema({
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
    },
    ingredients: {
      required: true,
      type: [String],
    },
    instructions: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    views: {
      default: 0,
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const RecipeModel = mongoose.model("Recipe", Recipe);
  module.exports = RecipeModel;

