const Data = require("../models/userData");

module.exports.create = async (req, res) => {
  try {
    const { p1, p2 } = req.body;
    const data = await Data.create({ p1, p2 });
    await data.save();
    res.status(201).json({ message: "Data createion done", data });
  } catch (err) {
    res
      .status(404)
      .json({ message: "Unable to pass the user", error: err.message });
  }
};
