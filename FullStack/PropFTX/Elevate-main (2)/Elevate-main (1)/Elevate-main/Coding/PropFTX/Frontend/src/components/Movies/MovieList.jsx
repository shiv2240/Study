import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import movieService from '../../services/movieService';
import './Movies.css';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGenre, setFilterGenre] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    const result = await movieService.getAllMovies();

    if (result.success) {
      setMovies(result.data);
      setError('');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  // Get unique genres for filter
  const genres = [...new Set(movies.map(movie => movie.genre).filter(Boolean))];

  // Filter movies based on search and genre
  const filteredMovies = movies.filter(movie => {
    const matchesSearch = (movie.movie_title || movie.title || '')
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesGenre = !filterGenre || movie.genre === filterGenre;

    return matchesSearch && matchesGenre;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
        <button onClick={fetchMovies} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="movie-list-container">
      <div className="movie-list-header">
        <h1>Movie Collection</h1>

        <div className="movie-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="genre-filter">
            <select
              value={filterGenre}
              onChange={(e) => setFilterGenre(e.target.value)}
              className="genre-select"
            >
              <option value="">All Genres</option>
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="movie-stats">
        <p>
          Showing {filteredMovies.length} of {movies.length} movies
        </p>
      </div>

      {filteredMovies.length === 0 ? (
        <div className="no-movies">
          <p>No movies found matching your criteria.</p>
        </div>
      ) : (
        <div className="movie-grid">
          {filteredMovies.map(movie => (
            <MovieCard
              key={movie._id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
