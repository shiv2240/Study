const express = require("express");
const { connection } = require("./Config/db.js");
const { UserModel } = require("./models/userModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();
app.use(express.json());

const AuthMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    jwt.verify(token, 'ourSecretKey', function(err, decoded) {
        if (err) {
            return res.status(401).send("Please Login First!");
        } else {
            next();
        }
    });
};

app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userExist = await UserModel.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ message: "User already Exists!" });
        }
        const hash = bcrypt.hashSync(password, 10);
        await UserModel.create({ name, email, password: hash });
        res.status(201).json({ message: "Signup Successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(501).json({ message: "Signup Failed!" });
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found!" });
        }
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
            const token = jwt.sign({ userId: user._id }, 'ourSecretKey');
            res.status(201).json({ message: "Login Successfully", token: token });
        } else {
            res.status(404).json({ message: "Login Failed!" });
        }
    } catch (err) {
        console.log(err.message);
        res.status(501).json({ message: "Login Failed!" });
    }
});

app.get("/Protect-endPoints", AuthMiddleware, (req, res) => {
    res.send("Protected data......");
});

const Server = async () => {
    try {
        await connection;
        console.log("Connected to Database!");
        app.listen(8000, () => console.log("Server is running on port 8000"));
    } catch (err) {
        console.error("Database Connection Failed!", err);
    }
};

Server();
