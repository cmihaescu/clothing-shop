import axios from "axios";

export const createOrder = async (orderDetails) => {
  let order_id = await axios
    .post("/createOrder", orderDetails)
    .then((res) => {
      console.log(res.data);
      return res.data.id;
    })
    .catch((err) => {
      console.error(
        "An error occurred while trying to create the order: ",
        err
      );
    });
  return order_id;
};
