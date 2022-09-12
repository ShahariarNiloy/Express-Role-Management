const User = require("../models/user.model");
const mongoose = require("mongoose");
const { roles } = require("../utils/constants");

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

const postAdminUpdateRole = async (req, res, next) => {
  const { id, role } = req.body;

  if (!id || !role) {
    req.flash("error", "Invalid request");
    return res.redirect("back");
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    req.flash("error", "Invalid Id");
    return res.redirect("back");
  }

  const rolesArray = Object.values(roles);
  if (!rolesArray.includes(role)) {
    req.flash("error", "Invalid role");
    return res.redirect("back");
  }

  if (req.user.id === id) {
    req.flash("error", "Admins cannot remove themselves, ask another admin");
    return res.redirect("back");
  }

  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true, runValidators: true }
  );

  req.flash("info", `Updated role for ${user.email} to ${user.role}`);

  res.redirect("back");
};

module.exports = { getAdminUsers, getAdminSingleUser, postAdminUpdateRole };
