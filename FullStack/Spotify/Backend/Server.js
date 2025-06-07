const express = require("express");
require("dotenv").config();
const connect = require("./config/connect");

const authPage = require("./routes/Auth");
const creatorRoutes = require("./routes/creator.route");
const userRoutes = require("./routes/user.route");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/auth", authPage);

app.use("/api/creator", creatorRoutes);
app.use("/api/user", userRoutes);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to server", err);
  });
