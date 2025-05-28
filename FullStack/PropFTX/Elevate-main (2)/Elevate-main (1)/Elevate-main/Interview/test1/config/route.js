const express = require("express");
const {getUser} = require("./get");
const route = express.Router();

route.get("/get", getUser)

module.exports = route;