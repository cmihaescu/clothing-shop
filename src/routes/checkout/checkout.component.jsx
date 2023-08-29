import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  currencySelector,
  cartItemsSelector,
  cartTotalPriceSelector,
  cartOrderId,
} from "../../store/cart/cart-selectors";
import { createOrderIdAsync } from "../../store/cart/cart-actions";

export const Checkout = () => {
  const dispatch = useDispatch();
  const currency = useSelector(currencySelector);
  const cartItems = useSelector(cartItemsSelector);
  const totalPrice = useSelector(cartTotalPriceSelector);
  const orderId = useSelector(cartOrderId);
  let orderDetails = {
    amount: totalPrice * 100,
    currency,
  };

  const handleCreateOrderRequest = () => {
    dispatch(createOrderIdAsync(orderDetails));
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <>
          <div className="table-columns">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </div>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} product={item} />
          ))}
          <div className="totalPriceBox">
            TOTAL: {totalPrice} {currency}
          </div>
          <button onClick={handleCreateOrderRequest}> create Order </button>
          {orderId ? <span>orderId: {orderId}</span> : ""}
        </>
      ) : (
        <h3>You have no items in your cart</h3>
      )}
    </div>
  );
};
