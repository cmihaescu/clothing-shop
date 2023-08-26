require("dotenv").config();
const express = require("express");
const axios = require("axios");
const router = express.Router();

let API_KEY_SANDBOX = process.env.REVOLUT_API_KEY_SANDBOX;

exports.handler = async (event) => {
  try {
    const order_details = JSON.parse.event.body;
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
        return {
          statusCode: 200,
          body: JSON.stringify(response.data),
        };
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log({ error });
    return {
      status: 400,
      body: JSON.stringify({ error }),
    };
  }
};
