const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY_SANDBOX = process.env.API_KEY_SANDBOX;

// Retrieve Order //

router.post("/", function (req, res) {
  let { order_id } = req.body;
  console.log("order id inside BE: ", order_id);
  let data = "";
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://sandbox-merchant.revolut.com/api/1.0/orders/${order_id}`,
    headers: {
      Authorization: `Bearer ${API_KEY_SANDBOX}`,
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log("BE response from retrieve endpoint", response.data);
      res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
