import axios from "axios";

export const createOrder = async (orderDetails) => {
  let order = await axios
    .post("/createOrder", orderDetails)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(
        "An error occurred while trying to create the order: ",
        err
      );
    });
  return order;
  // return { publicId: order.public_id };
};
