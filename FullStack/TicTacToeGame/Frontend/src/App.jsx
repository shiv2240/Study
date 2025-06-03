import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import GameBoard from './components/GameBoard';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || '');
  const [view, setView] = useState('login');

  if (!token) {
    return view === 'login'
      ? <Login setToken={setToken} switchView={() => setView('register')} />
      : <Register switchView={() => setView('login')} />;
  }

  return <GameBoard token={token} />;
}

export default App;
