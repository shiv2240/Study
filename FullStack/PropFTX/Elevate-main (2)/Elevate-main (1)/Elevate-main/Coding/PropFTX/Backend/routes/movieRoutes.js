const express = require("express");
const {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  addToWatchlist,
  removeFromWatchlist,
  getWatchlist,
} = require("../controllers/movieController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

// Movie CRUD routes
router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", auth, createMovie);
router.put("/:id", auth, updateMovie);
router.delete("/:id", auth, deleteMovie);

// Watchlist routes
router.post("/:id/watch", auth, addToWatchlist);
router.delete("/:id/watch", auth, removeFromWatchlist);
router.get("/watchlist/me", auth, getWatchlist);

module.exports = router;
