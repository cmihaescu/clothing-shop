import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

export const CartIcon = () => {
  const { cartDropdown, setCartDropdown, totalItems } = useContext(CartContext);
  const toggleCartDropdown = () => {
    setCartDropdown(!cartDropdown);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdown}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{totalItems}</span>
    </div>
  );
};
