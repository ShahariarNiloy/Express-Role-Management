const express = require("express");
require("dotenv").config();
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/index.route");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");
const session = require("express-session");
const connectFlash = require("connect-flash");

// initialization
const app = express();
const PORT = process.env.PORT || 5000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Init Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      // secure:true,
      httpOnly: true,
    },
  })
);

app.use(connectFlash());
app.use((req, res, next) => {
  res.locals.message = req.flash();
  next();
});

// routes
app.use("/", router);
app.use("/auth", authRouter);
app.use("/user", userRouter);

// error status && 404 page not found route handle
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});

app.use((error, req, res, next) => {
  error.status = error.status || 500;
  res.status(error.status);
  res.render("error_40x", { error });
});

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME,
  })
  .then(() => {
    // listen for requests

    app.listen(PORT, () => {
      console.log("Listening on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
