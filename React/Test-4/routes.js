const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.send("Hoem oage");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use((req, res) => {
  res.status(404).send("ROute is missing");
});

app.listen(3000, () => {
  console.log("Server is running on 3000");
});
