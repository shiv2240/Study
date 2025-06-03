const express = require('express');
const Game = require('../models/Game');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { opponent } = req.body;
  const game = new Game({
    players: [req.user.username, opponent],
    currentPlayer: req.user.username
  });
  await game.save();
  res.json(game);
});

router.get('/:id', auth, async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (!game) return res.status(404).send("Game not found");
  res.json(game);
});

module.exports = router;
