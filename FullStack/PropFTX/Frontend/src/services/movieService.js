import axios from 'axios';

const API_BASE_URL = 'https://propftx-f3ti.onrender.com/api';

const movieService = {
  // Get all movies
  getAllMovies: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching movies:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to fetch movies' 
      };
    }
  },

  // Get single movie
  getMovieById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching movie:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to fetch movie' 
      };
    }
  },

  // Create movie (requires authentication)
  createMovie: async (movieData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/movies`, movieData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error creating movie:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to create movie' 
      };
    }
  },

  // Update movie (requires authentication)
  updateMovie: async (id, movieData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/movies/${id}`, movieData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error updating movie:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to update movie' 
      };
    }
  },

  // Delete movie (requires authentication)
  deleteMovie: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/movies/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error deleting movie:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to delete movie' 
      };
    }
  },

  // Watchlist operations
  addToWatchlist: async (movieId) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/movies/${movieId}/watch`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error adding to watchlist:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to add to watchlist' 
      };
    }
  },

  removeFromWatchlist: async (movieId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/movies/${movieId}/watch`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error removing from watchlist:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to remove from watchlist' 
      };
    }
  },

  getWatchlist: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movies/watchlist/me`);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching watchlist:', error);
      return { 
        success: false, 
        error: error.response?.data?.error || 'Failed to fetch watchlist' 
      };
    }
  },
};

export default movieService;
