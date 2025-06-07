const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user info found" });
    }

    if (!allowedRoles.includes(req.user.type)) {
      return res
        .status(403)
        .json({
          message:
            "Forbidden: You don't have permission to access this resource",
        });
    }

    next();
  };
};

module.exports = roleMiddleware;
