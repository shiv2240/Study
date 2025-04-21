const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

module.exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Please provide a name" });
    } else if (!email) {
      return res.status(400).json({ message: "Please provide an email" });
    } else if (!password) {
      return res.status(400).json({ message: "Please provide a password" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email" });
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Unable to create a user", error: err.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ msg: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ token });
  } catch (err) {
    res
      .status(501)
      .json({ message: "Unable to create a user", error: err.message });
  }
};

module.exports.forgetpassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    const resetLink = `http://localhost:3000/reset-password/${token}`;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"YourApp Support" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset",
      html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link expires in 15 minutes.</p>`,
    });
    res.json({ message: "Password reset link sent to your email" });
  } catch (err) {
    res.status(501).json({
      message: "Unable to Reset password using Forget-Password",
      error: err.message,
    });
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token) return res.status(400).json({ message: "Token required" });
    if (!newPassword)
      return res.status(400).json({ message: "New Password required" });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) return res.status(404).json({ message: "User not found" });
      if (newPassword.length < 6)
        return res.status(400).json({ message: "Password too short" });
      user.password = await bcrypt.hash(newPassword, 10);
      await user.save();
      res.json({ message: "Password updated successfully" });
    } catch (err) {
      res
        .status(400)
        .json({ message: "Invalid or expired token", error: err.message });
    }
  } catch (err) {
    res
      .status(501)
      .json({ message: "Unable to Reset password", error: err.message });
  }
};
