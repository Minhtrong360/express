const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("empty test");
});
router.get("/two", function (req, res, next) {
  res.send("two");
});
router.get("/three", function (req, res, next) {
  res.send("three");
});
router.get("/four", function (req, res, next) {
  res.send("four");
});
module.exports = router;
