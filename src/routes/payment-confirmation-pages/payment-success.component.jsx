import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { retrieveOrder } from "../../htttp-requests/retrieve-order-frontend";

export const PaymentSuccessPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("");
  let order_public_id = searchParams.get("_rp_oid");

  useEffect(() => {
    const retrieveOrderFunction = async () => {
      await retrieveOrder("64da4634-1154-a9c1-8206-cb070d42c33e")
        .then((res) => {
          setOrder(res.id);
        })
        .catch((err) => console.log(err));
    };
    retrieveOrderFunction();
  }, []);

  return (
    <>
      <p>
        Hello, thank you for ordering with us. The payment for order{" "}
        {order_public_id} has been successful. Order is {order}
      </p>
    </>
  );
};
