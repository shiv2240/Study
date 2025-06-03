const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      return res.status(400).json({ message: "All fileds are required" });
    } else if (!username) {
      return res.status(400).json({ message: "Please fill the username" });
    } else if (!password) {
      return res.status(400).json({ message: "Please fill the password" });
    }
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.send(409).json({ message: "Username already exists" });
    }
    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashed });
    await newUser.save();

    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(404).json({ message: "Unable to register User", err });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username && !password) {
      return res.status(400).json({ message: "All fileds are required" });
    } else if (!username) {
      return res.status(400).json({ message: "Please fill the username" });
    } else if (!password) {
      return res.status(400).json({ message: "Please fill the password" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "User is not registered yet" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "2h" });
    res.status(200).json({ message: "Successfully logged in", token });
  } catch (err) {
    res
      .status(404)
      .json({ message: "Unable to pass the user", error: err.message });
  }
};
