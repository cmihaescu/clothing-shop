import { useSearchParams } from "react-router-dom";

export const PaymentSuccessPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let order_public_id = searchParams.get("_rp_oid");

  return (
    <>
      <p>
        Hello, thank you for ordering with us. The payment for order{" "}
        {order_public_id} has been successful.
      </p>
    </>
  );
};
