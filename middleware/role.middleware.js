const { roles } = require("../utils/constants");

function ensureAdmin(req, res, next) {
  if (req.user.role === roles.admin) {
    next();
  } else {
    req.flash("warning", "You are not authorized to see this route");
    res.redirect("/");
  }
}

function ensureModerator(req, res, next) {
  if (req.user.role === roles.moderator) {
    next();
  } else {
    req.flash("warning", "You are not authorized to see this route");
    res.redirect("/");
  }
}

module.exports = { ensureAdmin, ensureModerator };
