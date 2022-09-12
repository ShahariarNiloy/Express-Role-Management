const User = require("../models/user.model");
const mongoose = require("mongoose");

const getAdminUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.render("manage-users", { users });
  } catch (error) {
    next(error);
  }
};

const getAdminSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      req.flash("error", "Invalid Id");
      res.redirect("/admin/users");
      return;
    }

    const person = await User.findById(id);

    res.render("profile", { person });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAdminUsers, getAdminSingleUser };
