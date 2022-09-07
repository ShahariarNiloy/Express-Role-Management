const User = require("../models/user.model");

const getLogin = async (req, res, next) => {
  res.render("login");
};

const getRegister = async (req, res, next) => {
  res.render("register");
};

const getLogout = async (req, res, next) => {
  res.send("Get Logout");
};

const postLogin = async (req, res, next) => {
  res.send("post Login");
};

const postRegister = async (req, res, next) => {
  try {
    const { email } = req.body;
    const doesExist = await User.findOne({ email });

    if (doesExist) {
      res.redirect("/auth/register");
      return;
    }

    const user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { getLogin, getRegister, postLogin, postRegister, getLogout };
