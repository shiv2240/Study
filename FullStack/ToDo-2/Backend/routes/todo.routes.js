const { Router } = require("express");
const { getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/todo.controller");
const route = Router();

route.get("/getToDo", getToDo);

route.post("/saveToDo", saveToDo);
route.delete("/deleteToDo/:id", deleteToDo);
route.patch("/updateToDo/:id", updateToDo);

module.exports = route;
