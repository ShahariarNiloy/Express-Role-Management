const getLogin = async (req, res, next) => {
  res.send("Get Login");
};

const getRegister = async (req, res, next) => {
  res.send("Get Register");
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
