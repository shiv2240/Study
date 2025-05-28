import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useWatchlist } from '../../context/WatchlistContext';
import './Movies.css';

const MovieCard = ({ movie, onWatchlistUpdate, showInWatchlist = false }) => {
  const { isAuthenticated } = useAuth();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const [loading, setLoading] = useState(false);

  const watchlistStatus = isInWatchlist(movie._id);

  const handleWatchlistToggle = async () => {
    if (!isAuthenticated) {
      alert('Please login to manage your watchlist');
      return;
    }

    // Show confirmation when removing from watchlist
    if (watchlistStatus) {
      const confirmed = window.confirm(
        `Are you sure you want to remove "${movie.movie_title || movie.title}" from your watchlist?`
      );
      if (!confirmed) return;
    }

    setLoading(true);
    try {
      let result;
      if (watchlistStatus) {
        result = await removeFromWatchlist(movie._id);
      } else {
        result = await addToWatchlist(movie._id);
      }

      if (result.success) {
        if (onWatchlistUpdate) {
          onWatchlistUpdate();
        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error updating watchlist:', error);
      alert('Failed to update watchlist');
    }
    setLoading(false);
  };

  const handleDeleteFromWatchlist = async () => {
    const confirmed = window.confirm(
      `Are you sure you want to remove "${movie.movie_title || movie.title}" from your watchlist?`
    );

    if (!confirmed) return;

    setLoading(true);
    try {
      const result = await removeFromWatchlist(movie._id);
      if (result.success) {
        if (onWatchlistUpdate) {
          onWatchlistUpdate();
        }
      } else {
        alert(result.error);
      }
    } catch (error) {
      console.error('Error removing from watchlist:', error);
      alert('Failed to remove from watchlist');
    }
    setLoading(false);
  };

  const formatDuration = (minutes) => {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatRating = (rating) => {
    return rating ? `⭐ ${rating}/10` : 'No rating';
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.poster}
          alt={movie.movie_title || movie.title}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
          }}
        />
        <div className="movie-overlay">
          <button
            className={`watchlist-btn ${watchlistStatus ? 'in-watchlist' : ''}`}
            onClick={handleWatchlistToggle}
            disabled={loading}
          >
            {loading ? '...' : watchlistStatus ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.movie_title || movie.title}</h3>

        <div className="movie-details">
          <span className="movie-genre">{movie.genre}</span>
          <span className="movie-year">{movie.release_date?.split('-')[0] || movie.year}</span>
        </div>

        <div className="movie-meta">
          <span className="movie-rating">{formatRating(movie.rating)}</span>
          <span className="movie-duration">{formatDuration(movie.duration)}</span>
        </div>

        {movie.language && (
          <div className="movie-language">{movie.language}</div>
        )}

        {movie.synopsis && (
          <p className="movie-synopsis">
            {movie.synopsis.length > 100
              ? `${movie.synopsis.substring(0, 100)}...`
              : movie.synopsis
            }
          </p>
        )}

        <div className="movie-actions">
          {movie.trailer && (
            <a
              href={movie.trailer}
              target="_blank"
              rel="noopener noreferrer"
              className="trailer-btn"
            >
              🎬 Watch Trailer
            </a>
          )}

          {showInWatchlist && (
            <button
              onClick={handleDeleteFromWatchlist}
              disabled={loading}
              className="delete-btn"
            >
              {loading ? '...' : '🗑️ Remove'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
