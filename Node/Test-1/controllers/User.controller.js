const User = require("../models/user.model.js");

module.exports.addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created Successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Unable to add User", err: err.message });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: "User deleted Successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to delete User", err: err.message });
  }
};
module.exports.editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, email, password }, {new:true});
    res.status(201).json({ message: "User edited Successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to edit the User", err: err.message });
  }
};
module.exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json({ message: "All Users here", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Unable to edit the User", err: err.message });
  }
};
