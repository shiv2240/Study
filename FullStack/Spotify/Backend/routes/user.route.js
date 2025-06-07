const express = require("express");
const userRoutes = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { getUser } = require("../controllers/user.controller");

userRoutes.get("/getUser", authMiddleware, roleMiddleware(["user"]), getUser);

module.exports = userRoutes;
