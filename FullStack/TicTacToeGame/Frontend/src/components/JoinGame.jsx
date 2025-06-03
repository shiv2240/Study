import React, { useState } from 'react';
import axios from 'axios';
import socket from '../socket';

export default function JoinGame({ token, onJoin }) {
  const [gameId, setGameId] = useState('');
  const [error, setError] = useState('');

  const joinExistingGame = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/game/${gameId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      onJoin(res.data);
      socket.emit("joinGame", gameId);
      setError('');
    } catch (err) {
      setError('Game not found or you are not authorized', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Game ID to join"
        value={gameId}
        onChange={e => setGameId(e.target.value)}
      />
      <button onClick={joinExistingGame}>Join Game</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
}
