const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.register = async (req, res) => {
  try {
    const { username, email, password, type } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const user = new User({
      username,
      email,
      password,
      type
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        type: user.type
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email, type: user.type },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        type: user.type
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};
module.exports.me = async (req, res) => {
  try {
    // req.user is populated by authMiddleware and roleMiddleware confirms role
    const {id} = req.params
    const { username, email, type } = req.user;

    // Since roleMiddleware already checked, no need to re-check here
    res.status(200).json({
      message: "Creator profile fetched successfully",
      user: { id, username, email, type },
    });
  } catch (error) {
    console.error("Fetch creator profile error:", error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};
