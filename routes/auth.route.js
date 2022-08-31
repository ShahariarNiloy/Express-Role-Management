const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  getLogout,
} = require("../controllers/auth.controller");

const authRouter = require("express").Router();

authRouter.get("/login", getLogin);
authRouter.get("/register", getRegister);
authRouter.get("/logout", getLogout);

authRouter.post("/login", postLogin);
authRouter.post("/register", postRegister);

module.exports = authRouter;
