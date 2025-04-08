const router = require("express").Router();
const { addUser, getAllUsers } = require("../middlewares/user.middle");

router.post("/addUser", addUser);
router.get("/getAllUsers", getAllUsers);
module.exports = router;
