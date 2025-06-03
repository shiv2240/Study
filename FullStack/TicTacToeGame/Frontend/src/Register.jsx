import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; // Shared styling with Login

export default function Register({ switchView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:3001/auth/register', { username, password });
      alert("🎉 Registered! Now you can log in.");
      switchView();
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Register</h2>
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
      <button className="auth-button" onClick={register}>Register</button>
      <button className="auth-switch-button" onClick={switchView}>Back to Login</button>
    </div>
  );
}
