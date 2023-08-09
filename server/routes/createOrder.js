var express = require("express");
const axios = require("axios");
var router = express.Router();

/* Create order */
router.post("/", function (req, res, next) {
  let order_details = req.body;
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://sandbox-merchant.revolut.com/api/1.0/orders",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization:
        "Bearer sk_Gf389qKEjFSG-zQMlSAd4dV2XmB71FyG_yipnqzf-gIj-0IuNE3erhj1m9T8brXc",
    },
    data: order_details,
  };

  axios
    .request(config)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
