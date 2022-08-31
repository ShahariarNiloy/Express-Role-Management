const { getProfile } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.get("/profile", getProfile);

module.exports = userRouter;
