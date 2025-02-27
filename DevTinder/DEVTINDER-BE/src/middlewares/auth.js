const adminAuth = (req, res, next) => {
  console.log("Auth is checked");
  const token = "xyz";
  const isAuth = token === "xyz";
  if (!isAuth) {
    res.status(401).send("Unauthorized");
  } else {
    next();
  }
};
const userAuth = (req, res) => {
  res.send("All data");
};

module.exports = [adminAuth, userAuth];
