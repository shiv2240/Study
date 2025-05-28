import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { WatchlistProvider } from './context/WatchlistContext';
import Navigation from './components/Layout/Navigation';
import MovieList from './components/Movies/MovieList';
import Watchlist from './components/Movies/Watchlist';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <WatchlistProvider>
        <Router>
          <div className="App">
            <Navigation />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <footer className="footer">
              <p>&copy; 2024 MovieApp. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </WatchlistProvider>
    </AuthProvider>
  );
}

export default App;
