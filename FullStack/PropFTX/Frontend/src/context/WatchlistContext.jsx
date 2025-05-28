import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import movieService from '../services/movieService';

const WatchlistContext = createContext();

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useWatchlist must be used within a WatchlistProvider');
  }
  return context;
};

export const WatchlistProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [watchlist, setWatchlist] = useState([]);
  const [watchlistCount, setWatchlistCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch watchlist when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchWatchlist();
    } else {
      setWatchlist([]);
      setWatchlistCount(0);
    }
  }, [isAuthenticated]);

  const fetchWatchlist = async () => {
    setLoading(true);
    try {
      const result = await movieService.getWatchlist();
      if (result.success) {
        setWatchlist(result.data);
        setWatchlistCount(result.data.length);
      } else {
        console.error('Error fetching watchlist:', result.error);
      }
    } catch (error) {
      console.error('Error fetching watchlist:', error);
    }
    setLoading(false);
  };

  const addToWatchlist = async (movieId) => {
    try {
      const result = await movieService.addToWatchlist(movieId);
      if (result.success) {
        await fetchWatchlist(); // Refresh the watchlist
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Error adding to watchlist:', error);
      return { success: false, error: 'Failed to add to watchlist' };
    }
  };

  const removeFromWatchlist = async (movieId) => {
    try {
      const result = await movieService.removeFromWatchlist(movieId);
      if (result.success) {
        await fetchWatchlist(); // Refresh the watchlist
        return { success: true };
      } else {
        return { success: false, error: result.error };
      }
    } catch (error) {
      console.error('Error removing from watchlist:', error);
      return { success: false, error: 'Failed to remove from watchlist' };
    }
  };

  const isInWatchlist = (movieId) => {
    return watchlist.some(movie => movie._id === movieId);
  };

  const value = {
    watchlist,
    watchlistCount,
    loading,
    fetchWatchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
