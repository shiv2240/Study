const { signupValidation, loginValidation } = require("../Middelwares/AuthValidation");

const router = require("express").Router();

router.post("/login",loginValidation,(req,res)=>{
    res.send("Login SUccessful")
})


router.post("/signup",signupValidation,(req,res)=>{
    res.send("SignUp SUccessful")
})

module.exports = router;