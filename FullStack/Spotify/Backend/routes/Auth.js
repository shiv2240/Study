const { register, login, me } = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");


const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, me);

module.exports = router;
