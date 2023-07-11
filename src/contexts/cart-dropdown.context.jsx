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


export const CartDropdownContext = createContext({
    cartDropdown: null,
    cartItems: [],
    addItemToCart: () => { },
    totalItems: 0
})

export const CartDropdownProvider = ({ children }) => {
    const [cartDropdown, setCartDropdown] = useState(false)
    const [totalItems, setTotalItems] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
    }
    const value = { cartDropdown, setCartDropdown, cartItems, addItemToCart, totalItems, setTotalItems }

    useEffect(() => {
        setTotalItems(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
    }, [cartItems])

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}