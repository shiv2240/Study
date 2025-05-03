const express = require("express");
const { createUser, getUser, updateUser, deleteUser } = require("../controllers/userController.js");
const route = express.Router();

route.get("/get", getUser)
route.post("/create", createUser)
route.patch("/update/:id", updateUser)
route.delete("/delete/:id", deleteUser)

module.exports = route;