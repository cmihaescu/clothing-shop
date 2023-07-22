import { createContext, useReducer } from "react";

/////// REDUX LOGIC START ///////

const CART_ACTION_TYPES = {
    SET_CURRENCY: "SET_CURRENCY",
    SET_CART_DROPDOWN: "SET_CART_DROPDOWN",
    UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS"
}

const { SET_CURRENCY, SET_CART_DROPDOWN, UPDATE_CART_ITEMS } = CART_ACTION_TYPES

const INITIAL_STATE = {
    cartDropdown: null,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    currency: "EUR"
}

const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENCY:
            return {
                ...state,
                currency: payload
            }
        case SET_CART_DROPDOWN:
            return {
                ...state,
                cartDropdown: payload
            }
        case UPDATE_CART_ITEMS:
            const {cartItems, totalItems, totalPrice} = payload
            return {
                ...state,
                cartItems: cartItems,
                totalItems: totalItems,
                totalPrice: totalPrice
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer from cart context component`)
    }

}

/////// REDUX LOGIC END ///////

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
        return removeCartItem(cartItems, productToDecrease)
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
    totalItems: 0,
    totalPrice: 0,
    currency: "USD"
})

export const CartDropdownProvider = ({ children }) => {

    /////// REDUX LOGIC START ///////
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const { currency, cartDropdown, totalItems, totalPrice, cartItems } = state

    // const setCurrency = (currency) => {
    //     dispatch({ type: SET_CURRENCY, payload: currency })
    // }

    const setCartDropdown = (cartDropdown) => {
        dispatch({ type: SET_CART_DROPDOWN, payload: cartDropdown })
    }

    const updateCartItemsReducer = (newCartItems) => {
         let totalItems = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
         let totalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        let payload = {
            totalItems,
            totalPrice,
            cartItems: newCartItems
        }
        dispatch({ type: UPDATE_CART_ITEMS, payload })
    }
    /////// REDUX LOGIC END ///////


    const addItemToCart = (productToAdd) => {
        const newCartItems = addCardItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const decreaseItemFromCart = (productToDecrease) => {
        const newCartItems = decreaseCardItem(cartItems, productToDecrease)
        updateCartItemsReducer(newCartItems)

    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)

    }
    const value = {
        // cartDropdown, setCartDropdown,
        cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart,
        totalItems,
        totalPrice,
        // currency, setCurrency
    }


    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}