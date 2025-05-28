import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useWatchlist } from '../../context/WatchlistContext';
import MovieCard from './MovieCard';
import './Movies.css';

const Watchlist = () => {
  const { isAuthenticated } = useAuth();
  const { watchlist, loading, fetchWatchlist } = useWatchlist();

  if (!isAuthenticated) {
    return (
      <div className="watchlist-container">
        <div className="auth-required">
          <h2>Login Required</h2>
          <p>Please login to view your watchlist.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your watchlist...</p>
      </div>
    );
  }

  return (
    <div className="watchlist-container">
      <div className="watchlist-header">
        <h1>My Watchlist</h1>
        <p>Movies you want to watch</p>
      </div>

      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <div className="empty-state">
            <h3>Your watchlist is empty</h3>
            <p>Start adding movies to your watchlist to see them here!</p>
            <a href="/" className="browse-movies-btn">
              Browse Movies
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="watchlist-stats">
            <p>You have {watchlist.length} movie{watchlist.length !== 1 ? 's' : ''} in your watchlist</p>
          </div>

          <div className="movie-grid">
            {watchlist.map(movie => (
              <MovieCard
                key={movie._id}
                movie={movie}
                showInWatchlist={true}
                onWatchlistUpdate={fetchWatchlist}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Watchlist;
