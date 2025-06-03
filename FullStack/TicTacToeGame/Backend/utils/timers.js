const Game = require('../models/Game');

let timers = {};

const startTimer = (gameId, io) => {
  stopTimer(gameId);
  timers[gameId] = setTimeout(async () => {
    const game = await Game.findById(gameId);
    if (game && !game.winner) {
      game.currentPlayer = game.players.find(p => p !== game.currentPlayer);
      await game.save();
      io.to(gameId).emit("gameState", game);
      startTimer(gameId, io); // restart for next turn
    }
  }, 60000);
};

const stopTimer = (gameId) => {
  if (timers[gameId]) {
    clearTimeout(timers[gameId]);
    delete timers[gameId];
  }
};

module.exports = { startTimer, stopTimer };
