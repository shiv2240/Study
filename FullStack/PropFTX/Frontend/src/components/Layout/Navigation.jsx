import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useWatchlist } from '../../context/WatchlistContext';
import './Layout.css';

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { watchlistCount } = useWatchlist();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          🎬 MovieApp
        </Link>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>

          {isAuthenticated && (
            <Link to="/watchlist" className="nav-link watchlist-link" onClick={closeMenu}>
              My Watchlist
              {watchlistCount > 0 && (
                <span className="watchlist-count">{watchlistCount}</span>
              )}
            </Link>
          )}

          <div className="nav-auth">
            {isAuthenticated ? (
              <div className="user-menu">
                <span className="user-greeting">
                  Hello, {user?.username || 'User'}!
                </span>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="nav-link" onClick={closeMenu}>
                  Login
                </Link>
                <Link to="/register" className="nav-link register-link" onClick={closeMenu}>
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
