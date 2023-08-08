import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import Button from "../../components/button/button.component";
import { createOrder } from "../../htttp-requests/create-order";

export const Checkout = () => {
  const { currency } = useContext(CartDropdownContext);
  const { cartItems, totalPrice } = useContext(CartDropdownContext);

  const handleCreateOrder = () => {
    createOrder();
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
            <Button buttonType={"default"} onClick={handleCreateOrder}>
              Create order
            </Button>
          </div>
        </>
      ) : (
        <h3>You have no items in your cart</h3>
      )}
    </div>
  );
};
