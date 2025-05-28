const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movieId: { type: String, unique: true, required: true },
  movie_title: { type: String, required: true },
  poster: { type: String, required: true },
  trailer: String,
  rating: { type: Number, min: 0, max: 10 },
  duration: Number, // in minutes
  genre: String,
  language: String,
  release_date: String,
  synopsis: String,
  storyline: String,
  quality: { type: String, default: "HD" },
  // Legacy fields for backward compatibility
  title: String,
  year: Number,
  director: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);
