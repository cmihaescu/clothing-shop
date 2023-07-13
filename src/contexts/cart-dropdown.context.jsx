import { createContext, useEffect, useState } from "react";

const addCardItem = (cartItems, productToAdd) => {
    let productIndex = cartItems.findIndex(product => product.id === productToAdd.id)
    if (productIndex === -1) {
        productToAdd.quantity = 1;
        return cartItems = [...cartItems, productToAdd]
    } else {
        cartItems[productIndex].quantity += 1
        return [...cartItems]
    }
}

const decreaseCardItem = (cartItems, productToDecrease) => {
    let productIndex = cartItems.findIndex(product => product.id === productToDecrease.id)
    if (cartItems[productIndex].quantity > 1) {
        cartItems[productIndex].quantity -= 1
        return [...cartItems]
    } else {
        cartItems.splice(productIndex, 1)
        return [...cartItems]
    }
}

const removeCartItem = (cartItems, productToRemove) => {
    let productIndex = cartItems.findIndex(product => product.id === productToRemove.id)
    cartItems.splice(productIndex, 1)
    return [...cartItems]
}

export const CartDropdownContext = createContext({
    cartDropdown: null,
    cartItems: [],
    addItemToCart: () => { },
    totalItems: 0,
    totalPrice: 0,
})

export const CartDropdownProvider = ({ children }) => {
    const [cartDropdown, setCartDropdown] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
    }

    const decreaseItemFromCart = (productToDecrease) => {
        setCartItems(decreaseCardItem(cartItems, productToDecrease))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const value = { cartDropdown, setCartDropdown, cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart, totalItems, totalPrice, setTotalItems }

    useEffect(() => {
        setTotalItems(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
        setTotalPrice(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))
    }, [cartItems])

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}