// Simple API test script
const axios = require('axios');

const API_BASE_URL = 'http://localhost:2030/api';

async function testAPI() {
  console.log('🧪 Testing Movie API...\n');

  try {
    // Test 1: Get all movies
    console.log('1. Testing GET /api/movies');
    const moviesResponse = await axios.get(`${API_BASE_URL}/movies`);
    console.log(`✅ Success: Found ${moviesResponse.data.length} movies\n`);

    // Test 2: Register a test user
    console.log('2. Testing POST /api/auth/register');
    const testUser = {
      username: 'testuser_' + Date.now(),
      password: 'testpass123'
    };
    
    try {
      const registerResponse = await axios.post(`${API_BASE_URL}/auth/register`, testUser);
      console.log('✅ Success: User registered\n');
    } catch (error) {
      if (error.response?.status === 400) {
        console.log('⚠️  User might already exist, continuing...\n');
      } else {
        throw error;
      }
    }

    // Test 3: Login
    console.log('3. Testing POST /api/auth/login');
    const loginResponse = await axios.post(`${API_BASE_URL}/auth/login`, {
      username: testUser.username,
      password: testUser.password
    });
    const token = loginResponse.data.token;
    console.log('✅ Success: User logged in\n');

    // Test 4: Get watchlist (authenticated)
    console.log('4. Testing GET /api/movies/watchlist/me');
    const watchlistResponse = await axios.get(`${API_BASE_URL}/movies/watchlist/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(`✅ Success: Watchlist retrieved (${watchlistResponse.data.length} items)\n`);

    // Test 5: Add movie to watchlist
    if (moviesResponse.data.length > 0) {
      const firstMovie = moviesResponse.data[0];
      console.log('5. Testing POST /api/movies/:id/watch');
      
      try {
        const addWatchlistResponse = await axios.post(
          `${API_BASE_URL}/movies/${firstMovie._id}/watch`,
          {},
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('✅ Success: Movie added to watchlist\n');
      } catch (error) {
        if (error.response?.status === 400) {
          console.log('⚠️  Movie might already be in watchlist\n');
        } else {
          throw error;
        }
      }
    }

    console.log('🎉 All API tests completed successfully!');

  } catch (error) {
    console.error('❌ API Test failed:', error.response?.data || error.message);
  }
}

// Run the test
testAPI();
