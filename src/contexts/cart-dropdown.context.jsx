import { createContext, useEffect, useReducer } from "react";

/////// REDUX LOGIC ///////

const USER_ACTION_TYPES = {
    SET_CURRENCY: "SET_CURRENCY",
    SET_CART_DROPDOWN: "SET_CART_DROPDOWN",
    SET_TOTAL_ITEMS:"SET_TOTAL_ITEMS",
    SET_TOTAL_PRICE:"SET_TOTAL_PRICE",
    SET_CART_ITEMS:"SET_CART_ITEMS"
}

const { SET_CURRENCY, SET_CART_DROPDOWN, SET_TOTAL_ITEMS, SET_TOTAL_PRICE, SET_CART_ITEMS } = USER_ACTION_TYPES

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
        case SET_TOTAL_ITEMS:
            return {
                ...state,
                totalItems:payload
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice:payload
            }
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems:payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer`)
    }

}

/////// REDUX LOGIC ///////

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

    /////// REDUX LOGIC ///////
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const {currency, cartDropdown, totalItems, totalPrice, cartItems} = state

    const setCurrency = (currency) => {
        dispatch({ type: SET_CURRENCY, payload: currency })
    }

    const setCartDropdown = (cartDropdown) => {
        dispatch({type:SET_CART_DROPDOWN, payload:cartDropdown})
    }

    const setTotalItems = (totalItems) => {
        dispatch({type:SET_TOTAL_ITEMS, payload:totalItems})
    }

    const setTotalPrice = (totalPrice) => {
        dispatch({type:SET_TOTAL_PRICE, payload:totalPrice})
    }

    const setCartItems = (cartItems)=> {
        dispatch({type:SET_CART_ITEMS, payload:cartItems})
    }
    /////// REDUX LOGIC ///////

    const addItemToCart = (productToAdd) => {
        setCartItems(addCardItem(cartItems, productToAdd))
    }

    const decreaseItemFromCart = (productToDecrease) => {
        setCartItems(decreaseCardItem(cartItems, productToDecrease))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }
    const value = {
        cartDropdown, setCartDropdown,
        cartItems, addItemToCart, decreaseItemFromCart, removeItemFromCart,
        totalItems, setTotalItems,
        totalPrice, 
        currency, setCurrency
    }

    useEffect(() => {
        setTotalItems(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0))
        setTotalPrice(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))
    }, [cartItems])

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>

}