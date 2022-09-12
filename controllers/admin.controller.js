const User = require("../models/user.model");

const getAdminUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.send(users);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAdminUsers };
