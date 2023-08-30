const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY_SANDBOX = process.env.API_KEY_SANDBOX;

/* Create order */
router.post("/createOrder", function (req, res, next) {
  let order_details = req.body;
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

/* Retrieve order */

router.post("/retrieveOrder", function (req, res, next) {
  let { orderId } = req.body;

  console.log("req.body", req.body, "orderId", orderId);

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://sandbox-merchant.revolut.com/api/1.0/orders/${orderId}`,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${API_KEY_SANDBOX}`,
    },
  };

  axios(config)
    .then((response) => {
      console.log("Revolut response data", response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
module.exports = router;
