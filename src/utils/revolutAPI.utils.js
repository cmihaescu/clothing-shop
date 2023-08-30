import axios from "axios";

//CREATE ORDER API//
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
};

//RETRIEVE ORDER API//
export const retrieveOrder = async (orderId) => {
  let order = await axios
    .post("/retrieveOrder", { orderId })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(
        "An error occurred while trying to retrieve the order: ",
        err
      );
    });
  return order;
};
