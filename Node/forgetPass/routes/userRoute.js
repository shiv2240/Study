const express = require("express");
const { signup, login, forgetpassword, resetPassword } = require("../controllers/userController");
const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/forgetpassword", forgetpassword);
route.post("/resetPassword", resetPassword);

module.exports = route;