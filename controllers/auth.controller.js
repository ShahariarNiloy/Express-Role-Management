const getLogin = async (req, res, next) => {
  res.render("login");
};

const getRegister = async (req, res, next) => {
  res.render("register");
};

const getLogout = async (req, res, next) => {
  res.send("Get Logout");
};

const postLogin = async (req, res, next) => {
  res.send("post Login");
};

const postRegister = async (req, res, next) => {
  res.send("post Register");
};

module.exports = { getLogin, getRegister, postLogin, postRegister, getLogout };
