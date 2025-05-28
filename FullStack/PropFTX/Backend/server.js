require("dotenv").config();
const express = require("express");
const connect = require("./config/connect");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));

connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(" MongoDB connection failed", err.message);
    process.exit(1);
  });
