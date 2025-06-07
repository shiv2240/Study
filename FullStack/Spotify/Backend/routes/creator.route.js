const express = require("express");
const creatorRoutes = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { getCreator } = require("../controllers/creator.controller");

creatorRoutes.get("/getCreator", authMiddleware, roleMiddleware(["creator"]), getCreator);

module.exports = creatorRoutes;
