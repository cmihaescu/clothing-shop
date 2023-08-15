import axios from "axios";

export const retrieveOrder = async (order_id) => {
  console.log("order id inside FE callback: ", order_id);
  let orderDetails = await axios
    .post(`http://localhost:4000/retrieveOrder/`, { order_id })
    .then((res) => {
      return res.data;
    })
    .catch((error) => console.log(error.message));

  return orderDetails;
};
