const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { Server } = require('socket.io');

const authRoutes = require('./routes/auth');
const gameRoutes = require('./routes/game');
const { startTimer, stopTimer } = require('./utils/timers');
const Game = require('./models/Game');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/auth', authRoutes);
app.use('/game', gameRoutes);

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('joinGame', (gameId) => {
    socket.join(gameId);
    console.log(`Socket ${socket.id} joined game ${gameId}`);
    startTimer(gameId, io); // Start turn timer
  });

  socket.on('makeMove', async ({ gameId, index, player }) => {
    const game = await Game.findById(gameId);
    if (!game || game.board[index] || game.winner) return;

    game.board[index] = player;

    // Check for win
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ];
    const isWin = winningCombos.some(combo =>
      combo.every(i => game.board[i] === player)
    );

    if (isWin) {
      game.winner = player;
    } else {
      game.currentPlayer = game.players.find(p => p !== player);
    }

    await game.save();
    stopTimer(gameId);
    io.to(gameId).emit('gameState', game);
    if (!game.winner) startTimer(gameId, io);
  });

  socket.on('endGame', (gameId) => {
    stopTimer(gameId);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

server.listen(3001, () => console.log('Server running on port 3001'));
