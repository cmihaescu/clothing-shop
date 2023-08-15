import { useSearchParams } from "react-router-dom";

export const PaymentFailurePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let order_id = searchParams.get("_rp_oid");

  return (
    <>
      <p>
        Hello, unfortunately the payment for order {order_id} failed. Please try
        again or contact support.
      </p>
    </>
  );
};
