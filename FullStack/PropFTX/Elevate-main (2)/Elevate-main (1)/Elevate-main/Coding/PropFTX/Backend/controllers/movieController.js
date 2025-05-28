const Movie = require("../models/Movie");
const User = require("../models/User");

// Get all movies
module.exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single movie by ID
module.exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new movie
module.exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({ message: "Movie created successfully", movie });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: "Movie with this ID already exists" });
    }
    res.status(400).json({ error: err.message });
  }
};

// Update movie
module.exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie updated successfully", movie });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete movie
module.exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Watchlist operations
module.exports.addToWatchlist = async (req, res) => {
  const userId = req.user.id;
  const movieId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (user.watchlist.includes(movieId)) {
      return res.status(400).json({ message: "Movie already in watchlist" });
    }
    user.watchlist.push(movieId);
    await user.save();

    res.status(200).json({ message: "Added to watchlist", movieId});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.removeFromWatchlist = async (req, res) => {
  const userId = req.user.id;
  const movieId = req.params.id;

  try {
    const user = await User.findById(userId);
    user.watchlist = user.watchlist.filter(id => id.toString() !== movieId);
    await user.save();

    res.status(200).json({ message: "Removed from watchlist", movieId});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.getWatchlist = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId).populate("watchlist");
    res.status(200).json(user.watchlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
