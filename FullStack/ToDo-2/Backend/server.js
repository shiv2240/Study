const express = require("express");
const cors = require("cors");
const route = require("./routes/todo.routes.js");
const connect = require("./config/db.js");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Welcome to my ToDo App");
});

connect
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error to connect Mongo", err);
  });
