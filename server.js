const express = require("express");
require("dotenv").config();
const createHttpError = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/index.route");
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");

// initialization
const app = express();
const PORT = process.env.PORT || 5000;

// set view engine && public folder
app.set("view engine", "ejs");
app.use(express.static("public"));

// log statement
app.use(morgan("dev"));

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
  res.send(error);
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
