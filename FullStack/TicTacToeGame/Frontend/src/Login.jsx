import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; // <-- New shared CSS file

export default function Login({ setToken, switchView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:3001/auth/login', { username, password });
      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Login</h2>
      <input
        className="auth-input"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        className="auth-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={login}>Login</button>
      <button className="auth-switch-button" onClick={switchView}>Need an account? Register</button>
    </div>
  );
}
