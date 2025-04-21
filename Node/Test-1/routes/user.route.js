const express = require("express");
const {
  addUser,
  deleteUser,
  editUser,
  getUser,
} = require("../controllers/User.controller");
const router = express.Router();

router.post("/addUser", addUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/editUser/:id", editUser);
router.get("/getUser", getUser);

module.exports = router;
