const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const connect = require("./config/db.js");
const router = require("./routes/user.route.js");
const recipeRouter = require("./routes/recipe.route.js");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Recipe API");
});
app.use(router);
app.use(recipeRouter);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database", err);
    process.exit(1);
  });
