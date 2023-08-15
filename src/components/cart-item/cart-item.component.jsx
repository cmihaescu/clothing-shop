import { useContext } from "react";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";
import { CartContext } from "../../contexts/cart.context";
import "./cart-item.styles.scss";

export const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { currency, removeItemFromCart } = useContext(CartContext);

  const handleRemoveFromCart = () => removeItemFromCart(cartItem);

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x {price}&nbsp;{currency}
        </span>
        <span onClick={handleRemoveFromCart}>
          <RemoveIcon className="removeIcon" />
        </span>
      </div>
    </div>
  );
};
