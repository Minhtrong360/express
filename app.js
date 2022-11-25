require("dotenv").config();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
// app.use((req, res, next) => {
//   const err = new Error("Not found");
//   err.statusCode = 440;
//   res.status(err.statusCode).send(err.message);
//   console.log("res là gì", res);
// });

app.use("/", indexRouter);

// app.use((err, req, res, next) => {
//   console.log("ERROR", err.message);
//   return res.send(err.message);
// });

module.exports = app;
