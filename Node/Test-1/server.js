require("dotenv").config();
const connect = require("./config/db.js");
const express = require("express");
const app = express();
const router = require("./routes/user.route.js")
app.use(express.json());
const PORT = process.env.PORT;
app.use(router);

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to server", err);
  });
