import axios from "axios";

export const createOrder = async (totalPrice, currency) => {
  let order_details = {
    amount: totalPrice * 100,
    currency: `${currency}`,
  };

  await axios
    .post("http://localhost:4000/createOrder", order_details)
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error.message));
};
