require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");
const moviesData = require("../data.json");

const seedMovies = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");

    // Clear existing movies
    await Movie.deleteMany({});
    console.log("Cleared existing movies");

    // Insert new movies
    const movies = await Movie.insertMany(moviesData);
    console.log(`Seeded ${movies.length} movies successfully`);

    // Close connection
    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error("Error seeding movies:", error);
    process.exit(1);
  }
};

// Run the seeding function
if (require.main === module) {
  seedMovies();
}

module.exports = seedMovies;
