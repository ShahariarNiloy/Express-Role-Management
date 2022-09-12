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
  ensureAuthenticated,
  ensureNotAuthenticated,
} = require("../middleware/auth.middleware");

const authRouter = require("express").Router();

authRouter.get("/login", ensureNotAuthenticated, getLogin);
authRouter.get("/register", ensureNotAuthenticated, getRegister);
authRouter.get("/logout", ensureAuthenticated, getLogout);

authRouter.post("/login", ensureNotAuthenticated, postLoginMiddleware);
authRouter.post(
  "/register",
  ensureNotAuthenticated,
  postRegisterMiddleware,
  postRegister
);

module.exports = authRouter;
