const {
  getAdminUsers,
  getAdminSingleUser,
} = require("../controllers/admin.controller");

const adminRouter = require("express").Router();

adminRouter.get("/users", getAdminUsers);
adminRouter.get("/user/:id", getAdminSingleUser);

module.exports = adminRouter;
