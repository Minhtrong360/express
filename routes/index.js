var express = require("express");
var router = express.Router();

/* GET home page. */

router.get(
  "/user/:id",
  function (req, res, next) {
    console.log("although this matches");
    next();
  },
  (req, res, next) => {
    req.addOn = "I'm adding on";
    try {
      const error = new Error("error here");
      error.statusCode = 401;
      throw error;
    } catch (error) {
      next(error);
    }
  },
  (req, res, next) => {
    if (req.addOn) {
      req.transformed = "Added success";
    } else {
      res.status(500).send("internal server error");
    }
    next();
  },
  (req, res) => {
    res.status(200).send(req.transformed);
  }
);

router.get("/", function (req, res, next) {
  res.send("Hello world");
});

// router.get((req, res, next) => {
//   const err = new Error("Not found me");
//   err.statusCode = 404;
//   res.status(error.statusCode).send(err.message);
// });

// const testRouter = require("./test");
// router.use("/test", testRouter);

// const demoRouter = require("./demo");
// router.use("/demo", demoRouter);
// router.get("/welcome/:id", (req, res, next) => {
//   const { url, params, query, body } = req;
//   console.log({ url, params, query, body });
//   res.send("It's me");
// });

// router.get("/home/:id", (req, res, next) => {
//   const { url, params, query, body } = req;
//   console.log({ url, params, query, body });
//   res.send("It's me");
// });

module.exports = router;
