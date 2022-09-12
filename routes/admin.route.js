const {
  getAdminUsers,
  getAdminSingleUser,
  postAdminUpdateRole,
} = require("../controllers/admin.controller");

const adminRouter = require("express").Router();

adminRouter.get("/users", getAdminUsers);
adminRouter.get("/user/:id", getAdminSingleUser);

adminRouter.post("/update-role", postAdminUpdateRole);

module.exports = adminRouter;
