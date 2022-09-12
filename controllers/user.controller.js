const getProfile = async (req, res, next) => {
  const person = req.user;
  res.render("profile", { person });
};

module.exports = { getProfile };
