const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY_SANDBOX = process.env.API_KEY_SANDBOX;

/* Create order */
router.post("/", function (req, res, next) {
  let order_details = req.body;
  console.log(order_details);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://sandbox-merchant.revolut.com/api/1.0/orders",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${API_KEY_SANDBOX}`,
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
