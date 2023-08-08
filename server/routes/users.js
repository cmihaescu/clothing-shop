var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json("responseee from BE successfully received");
});

module.exports = router;
