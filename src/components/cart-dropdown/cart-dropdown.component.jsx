import { useContext } from "react";
import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

export const CartDropdown = () => {
  const { cartItems, setCartDropdown, cartDropdown } = useContext(CartContext);

  const handleCheckoutButtonClick = () => {
    setCartDropdown(!cartDropdown);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <span className="empty-cart-message">Your cart is empty</span>
        )}
      </div>
      <Link to={"checkout"}>
        <Button onClick={handleCheckoutButtonClick} type="">
          {" "}
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};
