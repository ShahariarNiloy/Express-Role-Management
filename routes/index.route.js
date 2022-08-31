const router = require("express").Router();

// first route
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
