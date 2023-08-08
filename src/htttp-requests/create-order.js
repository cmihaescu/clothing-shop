import axios from "axios";

export const createOrder = async () => {
  await axios
    .get("http://localhost:4000/users")
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error.message));
};
