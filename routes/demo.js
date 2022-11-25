const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  const { body, params, url, query } = req;

  console.log({ body, params, url, query });
  res.send("demo success");
});

module.exports = router;
