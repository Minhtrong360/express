var express = require("express");
var router = express.Router();

/* GET users listing. */
const data = [
  { name: "tuan", age: 15 },
  { name: "trung", age: 16 },
];

router.get(
  "/:id",
  function (req, res, next) {
    console.log("although this matches");
    next();
  },
  (req, res, next) => {
    req.addOn = "I'm adding on";
  },
  (req, res, next) => {
    if (req.addOn) {
      req.transformed = "Added success";
    } else {
      res.status(500).send("internal server error");
    }
  },
  (req, res) => {
    res.status(200).send(req.transformed);
  }
);

// router.get(
//   "/:id",
//   function (req, res, next) {
//     console.log("although this matches");
//     next();
//   },
//   (req, res, next) => {
//     req.addOn = "I'm adding on";
//     res.send(req.addOn);
//   },
//   (req, res, next) => {
//     if (req.addOn) {
//       req.transformed = "Added success";
//     } else {
//       res.status(500).send("internal server error");
//     }
//     next();
//   },
//   (req, res) => {
//     res.status(200).send(req.transformed);
//   }
// );

// router.get(
//   "/:id",
//   function (req, res, next) {
//     console.log("although this matches");
//     next();
//   },
//   (req, res, next) => {
//     req.addOn = "I'm adding on";
//     next();
//   },
//   (req, res, next) => {
//     if (req.addOn) {
//       req.transformed = "Added success";
//     } else {
//       res.status(500).send("internal server error");
//     }
//     next();
//   },
//   (req, res) => {
//     res.status(200).send(req.transformed);
//   }
// );

// router.get("/:id", function (req, res, next) {
//   console.log("although this matches");
//   next();
// });

// router.get("/:id", function (req, res) {
//   console.log("and this matches too");
//   res.send("haha");
// });

// router.get("/:id", function (req, res, next) {
//   console.log("although this matches");
//   res.send("Hello");
//   console.log(req);

// const { url, query } = req;
// const filterCondition = query.name;
// let result = data;
// if (filterCondition) {
//   result = result.map((e) => e.name === filterCondition);
// }
// console.log({ url, query });
// console.log(res);
// res.status(200).send("This is 200 status code");
// res.send("This is 200 status code đáp án 2");
// res.send("404");
// res.status(200).json({ message: "This is 200 status code" });
// });

module.exports = router;
