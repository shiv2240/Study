const express = require("express");
const {
  getAllMovies,
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
} = require("../controllers/movieController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", getAllMovies);
router.post("/:id/watch", auth, addToWatchlist);
router.get("/watchlist/me", auth, getWatchlist);
router.delete("/:id/watch", auth, removeFromWatchlist);

module.exports = router;
