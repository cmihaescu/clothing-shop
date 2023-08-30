import { useEffect, useState } from "react";
import { retrieveOrder } from "../../utils/revolutAPI.utils";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart/cart-actions";
import { Link } from "react-router-dom";
import "./order-confirmation-page.styles.scss";

export const OrderConfirmationPage = ({ orderId }) => {
  const [orderSuccess, setOrderSuccess] = useState("initial");
  const dispatch = useDispatch();
  const successfulParagraph = `Thank you for your order. The payment was successful. Order ID is ${orderId}`;
  const failureParagraph = `Unfortunately the payment failed or was declined by your bank. Order ID is ${orderId}. Your cart has not been cleared so please try again with another card or reach out to your bank. If issue persists, please contact the merchant.`;

  useEffect(() => {
    const fetchOrder = async () => {
      let order = await retrieveOrder(orderId);
      return order;
    };
    fetchOrder()
      .then((order) => {
        if (order.state === "COMPLETED" || order.state === "AUTHORISED") {
          setOrderSuccess(true);
          dispatch(clearCart());
        } else {
          setOrderSuccess(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="confirmation-page-content">
      {orderSuccess !== "initial" ? (
        orderSuccess === true ? (
          <>
            <p>{successfulParagraph}</p>
            <Link className="shop-some-more-btn" to="/shop">
              Shop some more!
            </Link>
          </>
        ) : (
          <p>{failureParagraph}</p>
        )
      ) : (
        <p>Please wait...</p>
      )}
    </div>
  );
};
