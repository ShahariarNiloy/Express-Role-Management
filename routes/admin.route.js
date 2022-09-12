const { getAdminUsers } = require("../controllers/admin.controller");

const adminRouter = require("express").Router();

adminRouter.get("/users", getAdminUsers);

module.exports = adminRouter;
