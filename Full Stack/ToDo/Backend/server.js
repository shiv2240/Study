const express = require("express");
const { connect } = require("./config/db.js");
const {router} = require("./routes/todo.routes");
const cors = require("cors")
require("dotenv").config();
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors)

app.use("/todos", router);

app.get("/", (req, res) => {
  res.send("Welcome to To-Do App");
});

connect
  .then(() => {
    console.log("Mongo Connected");
    app.listen(PORT, () => {
      console.log(`This server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Connection error", err);
  });
