const User = require("../models/userModel");

module.exports.getCreator = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Creator profile retrieved successfully",
      user,
    });
  } catch (error) {
    console.error("Error fetching creator profile:", error);
    res.status(500).json({ message: "Server error fetching creator profile" });
  }
};
