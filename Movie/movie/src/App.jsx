import { useEffect, useState, useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debounceRef = useRef(null);
  const [selMovie, setSelMovie] = useState(null);
  const [movieLoading, setMovieLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=d002f655&s=${search}`
        );
        setMovies(res.data.Search || []);
        setError(null);
      } catch (error) {
        console.error("API Issue", error);
        setError("An error occurred while fetching data.");
      }
      setLoading(false);
    };
    if (search) {
      debounceRef.current = setTimeout(() => {
        fetchData();
      }, 1000);
    }
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [search]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setMovieLoading(true);
      try {
        const res = await axios.get(
          `http://www.omdbapi.com/?apikey=d002f655&i=${selMovie}`
        );
        setMovieDetails(res.data);
        setError(null);
      } catch (error) {
        console.error("API Issue", error);
        setError("An error occurred while fetching movie details.");
      }
      setMovieLoading(false);
    };
    if (selMovie) {
      fetchMovieDetails();
    }
  }, [selMovie]);

  useEffect(() => {
    if (movies.length > 0) {
      const uniqueGenres = [...new Set(movies.map((movie) => movie.Genre))];
      setGenres(uniqueGenres);
    }
  }, [movies]);

  const Ascending = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.Year.localeCompare(b.Year)
    );
    setMovies(sortedMovies);
  };

  const Descending = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      b.Year.localeCompare(a.Year)
    );
    setMovies(sortedMovies);
  };

  const filterByGenre = (genre) => {
    setSelectedGenre(genre);
  };

  const filteredMovies = selectedGenre
    ? movies.filter((movie) => movie.Genre.includes(selectedGenre))
    : movies;

  const handleMovieClick = (imdbID) => {
    setSelMovie(imdbID);
    setShowDetails(true);
  };

  const handleBackToResults = () => {
    setShowDetails(false);
    setSelMovie(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {!showDetails ? (
        <>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
          />
          <select
            onChange={(e) => filterByGenre(e.target.value)}
            style={{ padding: "10px", marginBottom: "10px" }}
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <div>
            <button
              onClick={Descending}
              style={{
                padding: "10px 15px",
                margin: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Sort by Year (Descending)
            </button>
            <button
              onClick={Ascending}
              style={{
                padding: "10px 15px",
                margin: "5px",
                backgroundColor: "#008CBA",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Sort by Year (Ascending)
            </button>
          </div>
          {loading ? (
            <p style={{ fontStyle: "italic" }}>Loading...</p>
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p>
          ) : filteredMovies.length > 0 ? (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {filteredMovies.map((movie, i) => (
                <li
                  key={i}
                  onClick={() => handleMovieClick(movie.imdbID)}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  {movie.Title}
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found</p>
          )}
        </>
      ) : (
        <>
          <button
            onClick={handleBackToResults}
            style={{
              padding: "10px 15px",
              margin: "5px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Back to Results
          </button>
          {movieLoading ? (
            <p style={{ fontStyle: "italic" }}>Loading movie details...</p>
          ) : movieDetails ? (
            <div
              style={{
                marginTop: "20px",
                padding: "20px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                maxWidth: "600px",
              }}
            >
              <h2 style={{ marginTop: 0 }}>{movieDetails.Title}</h2>
              <img
                src={movieDetails.Poster}
                alt={movieDetails.Title}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <div style={{ padding: "10px 0" }}>
                <p>
                  <strong>Year:</strong> {movieDetails.Year}
                </p>
                <p>
                  <strong>Genre:</strong> {movieDetails.Genre}
                </p>
                <p>
                  <strong>Director:</strong> {movieDetails.Director}
                </p>
                <p>
                  <strong>Plot:</strong> {movieDetails.Plot}
                </p>
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default App;
