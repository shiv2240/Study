# MovieApp - Basic Movie Listing Application

A full-stack movie listing application built with Node.js, Express, MongoDB, and React.

## Features

### Backend Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ User authentication with JWT
- ✅ Complete CRUD operations for movies
- ✅ Watchlist functionality
- ✅ Password hashing with bcrypt
- ✅ CORS enabled for frontend integration
- ✅ Database seeding with sample movie data

### Frontend Features
- ✅ React application with modern hooks
- ✅ React Router for navigation
- ✅ Authentication system (login/register)
- ✅ Movie listing with search and filter
- ✅ Watchlist management
- ✅ Responsive design
- ✅ Clean and modern UI
- ✅ Error handling and loading states

### Additional Features
- ✅ Movie posters and trailers
- ✅ Movie ratings and details
- ✅ User-specific watchlists
- ✅ Mobile-responsive design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

### Frontend
- React 19
- React Router DOM
- Axios for API calls
- Modern CSS with Flexbox/Grid
- Vite for development server

## Project Structure

```
PropFTX/
├── Backend/
│   ├── config/
│   │   └── connect.js          # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js   # Authentication logic
│   │   └── movieController.js  # Movie CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js   # JWT verification
│   ├── models/
│   │   ├── Movie.js           # Movie schema
│   │   └── User.js            # User schema
│   ├── routes/
│   │   ├── authRoutes.js      # Auth endpoints
│   │   └── movieRoutes.js     # Movie endpoints
│   ├── scripts/
│   │   └── seedMovies.js      # Database seeding
│   ├── data.json              # Sample movie data
│   ├── server.js              # Main server file
│   └── package.json
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/           # Login/Register components
│   │   │   ├── Layout/         # Navigation component
│   │   │   └── Movies/         # Movie-related components
│   │   ├── context/
│   │   │   └── AuthContext.jsx # Authentication context
│   │   ├── services/
│   │   │   └── movieService.js # API service functions
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   └── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env`:
```
PORT=2030
MONGODB_URI=mongodb+srv://shivsahni2240:e51j4i1P2qxscoYZ@myplace.moobold.mongodb.net/PropFTX
JWT_SECRET=MyMSIExtensionKey123@@
```

4. Seed the database with sample movies:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm run dev
```

The backend will be running on http://localhost:2030

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be running on http://localhost:5174

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get single movie
- `POST /api/movies` - Create movie (requires auth)
- `PUT /api/movies/:id` - Update movie (requires auth)
- `DELETE /api/movies/:id` - Delete movie (requires auth)

### Watchlist
- `POST /api/movies/:id/watch` - Add movie to watchlist (requires auth)
- `DELETE /api/movies/:id/watch` - Remove movie from watchlist (requires auth)
- `GET /api/movies/watchlist/me` - Get user's watchlist (requires auth)

## Usage

1. **Browse Movies**: Visit the home page to see all available movies
2. **Search & Filter**: Use the search bar and genre filter to find specific movies
3. **Register/Login**: Create an account or login to access watchlist features
4. **Manage Watchlist**: Add/remove movies from your personal watchlist
5. **View Details**: Click on movie cards to see detailed information

## Database Schema

### User Model
```javascript
{
  username: String (unique, required),
  password: String (required, hashed),
  watchlist: [ObjectId] (references to Movie)
}
```

### Movie Model
```javascript
{
  movieId: String (unique, required),
  movie_title: String (required),
  poster: String (required),
  trailer: String,
  rating: Number (0-10),
  duration: Number (minutes),
  genre: String,
  language: String,
  release_date: String,
  synopsis: String,
  storyline: String,
  quality: String (default: "HD")
}
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
