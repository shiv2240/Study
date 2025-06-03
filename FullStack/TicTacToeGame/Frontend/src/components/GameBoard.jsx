import { useEffect, useState } from 'react';
import axios from 'axios';
import socket from '../socket';
import { jwtDecode } from 'jwt-decode';
import JoinGame from './JoinGame';
import "./GamBoard.css"; // <-- CSS added

export default function GameBoard({ token }) {
  const [game, setGame] = useState(null);
  const [player, setPlayer] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setPlayer(decoded.username);
    }
  }, [token]);

  const createGame = async () => {
    const opponent = prompt("Enter opponent username:");
    if (!opponent) return;
    try {
      const res = await axios.post('http://localhost:3001/game', { opponent }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setGame(res.data);
      socket.emit("joinGame", res.data._id);
      alert(`Game created! Share this Game ID with your opponent:\n${res.data._id}`);
    } catch (err) {
      alert("Error creating game");
      console.error(err);
    }
  };

  const handleClick = (index) => {
    if (
      !game || 
      game.board[index] || 
      game.winner || 
      game.currentPlayer !== player
    ) return;

    socket.emit("makeMove", { gameId: game._id, index, player });
  };

  useEffect(() => {
    if (!game) return;

    socket.emit("joinGame", game._id);

    socket.on("gameState", updatedGame => {
      setGame(updatedGame);
      setTimer(60);
    });

    return () => {
      socket.off("gameState");
      socket.emit("endGame", game._id);
    };
  }, [game?._id]);

  useEffect(() => {
    if (!game) return;
    const interval = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [game]);

  if (!game) {
    return (
      <div className="game-container">
        <button className="primary-button" onClick={createGame}>Start New Game</button>
        <JoinGame token={token} onJoin={setGame} />
      </div>
    );
  }

  return (
    <div className="game-container">
      <div className="game-info">
        <div className={`player-label ${game.currentPlayer === player ? 'your-turn' : ''}`}>
          Your Player: <strong>{player}</strong>
        </div>
        <div className="timer">⏱ Time Left: {timer}s</div>
        <div className="current-player">
          {game.currentPlayer === player ? "👉 Your Turn!" : `${game.currentPlayer}'s Turn`}
        </div>
      </div>

      <div className="board">
        {game.board.map((val, i) => (
          <div
            key={i}
            className={`cell ${game.currentPlayer === player && !val && !game.winner ? 'clickable' : ''}`}
            onClick={() => handleClick(i)}
          >
            {val}
          </div>
        ))}
      </div>

      {game.winner && (
        <div className="winner-banner">
          🎉 Winner: {game.winner === player ? 'You!' : game.winner}
        </div>
      )}
    </div>
  );
}
