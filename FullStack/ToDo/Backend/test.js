const express = require("express");
const { connect } = require("./config/db.js");
const { router } = require("./routes/todo.routes");
const cors = require("cors");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 2012; // Set default port if .env is missing

// ✅ Debug: Log when the server starts
console.log("Starting the server...");

// ✅ Middleware Debugging
app.use(express.json());
app.use(cors()); // ✅ Fixed: CORS should be used as a function

// ✅ Debug: Log when middleware is applied
console.log("Middleware applied (express.json & CORS)");

// ✅ Debug: Log when a request reaches the server
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use("/todos", router);

// ✅ Debug: Log when the homepage is accessed
app.get("/", (req, res) => {
  console.log("Homepage accessed");
  res.send("Welcome to To-Do App");
});

// ✅ Debug: Log before connecting to MongoDB
console.log("Connecting to MongoDB...");

connect
  .then(() => {
    console.log("✅ MongoDB Connected Successfully!");
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });
