import { useSearchParams } from "react-router-dom";

export const PaymentCancellationPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let order_id = searchParams.get("_rp_oid");

  return (
    <>
      <p>
        Hello, you have cancelled the payment process for order {order_id}.
        Please go back to checkout to complete the payment.
      </p>
    </>
  );
};
