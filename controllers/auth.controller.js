require("passport");
const { validationResult } = require("express-validator");
const User = require("../models/user.model");

const getLogin = async (req, res, next) => {
  res.render("login");
};

const getRegister = async (req, res, next) => {
  res.render("register");
};

const getLogout = async (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/login");
  });
};

const postLogin = async (req, res, next) => {
  res.send("post Login");
};

const postRegister = async (req, res, next) => {
  try {
    const { errors } = validationResult(req);
    if (errors.length > 0) {
      console.log(errors);
      errors.forEach((error) => {
        req.flash("error", error.msg);
      });
      res.render("register", {
        email: req.body.email,
        messages: req.flash(),
      });
      return;
    }

    const { email } = req.body;
    const doesExist = await User.findOne({ email });

    if (doesExist) {
      req.flash("warning", "Username/email already exists");
      res.render("register", {
        messages: req.flash(),
      });
      return;
    }

    const user = new User(req.body);
    await user.save();
    req.flash(
      "success",
      `${user.email} registered successfully, you can now login`
    );
    res.render("login", {
      messages: req.flash(),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getLogin, getRegister, postLogin, postRegister, getLogout };
