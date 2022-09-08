const { body } = require("express-validator");

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

module.exports = { postRegisterMiddleware };
