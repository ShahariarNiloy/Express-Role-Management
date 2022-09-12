const { body } = require("express-validator");
const passport = require("passport");

const postRegisterMiddleware = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Email must be a valid email")
    .normalizeEmail()
    .toLowerCase(),
  body("password")
    .trim()
    .isLength(5)
    .withMessage("Password length short, min 5 characters required"),
  body("password2").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password do not match");
    }
    return true;
  }),
];

const postLoginMiddleware = passport.authenticate("local", {
  successRedirect: "/user/profile",
  failureRedirect: "/auth/login",
  failureFlash: true,
});

module.exports = { postRegisterMiddleware, postLoginMiddleware };
