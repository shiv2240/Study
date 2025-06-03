const express = require("express");
const connect = require("./config/db");
const UserRouter = require("./routes/userRoute");
const IntRouter = require("./routes/intRoutes");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api/auth", UserRouter);
app.use("/api/user", IntRouter)
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Unable to start the server`, err);
  });
