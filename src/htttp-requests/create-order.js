import axios from "axios";

export const createOrder = async (setOrderPublicId, totalPrice, currency) => {
  let order_details = {
    amount: totalPrice * 100,
    currency: `${currency}`,
  };

  await axios
    .post("http://localhost:4000/createOrder", order_details)
    .then((res) => {
      console.log(res.data);
      setOrderPublicId(res.data.public_id);
      return res.data.public_id;
    })
    .catch((error) => console.log(error.message));
};
