const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  players: [String],
  board: { type: [String], default: Array(9).fill(null) },
  currentPlayer: String,
  winner: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
