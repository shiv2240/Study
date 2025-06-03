const { create } = require("../controllers/User")
const authMid = require("../middlewares/authMiddleware")
const IntRouter = require("express").Router()

IntRouter.post("/create",authMid, create)


module.exports = IntRouter