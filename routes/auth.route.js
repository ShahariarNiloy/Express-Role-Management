const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  getLogout,
} = require("../controllers/auth.controller");
const {
  postRegisterMiddleware,
  postLoginMiddleware,
} = require("../middleware/auth.middleware");

const authRouter = require("express").Router();

authRouter.get("/login", getLogin);
authRouter.get("/register", getRegister);
authRouter.get("/logout", getLogout);

authRouter.post("/login", postLoginMiddleware);
authRouter.post("/register", postRegisterMiddleware, postRegister);

module.exports = authRouter;
