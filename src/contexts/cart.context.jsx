import { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
  let productIndex = cartItems.findIndex(
    (product) => product.id === productToAdd.id
  );
  if (productIndex === -1) {
    productToAdd.quantity = 1;
    return (cartItems = [...cartItems, productToAdd]);
  } else {
    cartItems[productIndex].quantity += 1;
    return [...cartItems];
  }
};

const decreaseCardItem = (cartItems, productToDecrease) => {
  let productIndex = cartItems.findIndex(
    (product) => product.id === productToDecrease.id
  );
  if (cartItems[productIndex].quantity > 1) {
    cartItems[productIndex].quantity -= 1;
    return [...cartItems];
  } else {
    return removeCartItem(cartItems, productToDecrease);
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  let productIndex = cartItems.findIndex(
    (product) => product.id === productToRemove.id
  );
  cartItems.splice(productIndex, 1);
  return [...cartItems];
};

export const CartContext = createContext({
  cartDropdown: null,
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  currency: "USD",
});

export const CartProvider = ({ children }) => {
  const [cartDropdown, setCartDropdown] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [currency, setCurrency] = useState("EUR");

  const addItemToCart = (productToAdd) => {
    setCartItems(addCardItem(cartItems, productToAdd));
  };

  const decreaseItemFromCart = (productToDecrease) => {
    setCartItems(decreaseCardItem(cartItems, productToDecrease));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const value = {
    cartDropdown,
    setCartDropdown,
    cartItems,
    addItemToCart,
    decreaseItemFromCart,
    removeItemFromCart,
    totalItems,
    setTotalItems,
    totalPrice,
    currency,
    setCurrency,
  };

  useEffect(() => {
    setTotalItems(
      cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      )
    );
  }, [cartItems]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
