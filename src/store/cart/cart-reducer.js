import { CART_ACTION_TYPES } from "./cart-types"

const { SET_CURRENCY, SET_CART_DROPDOWN, UPDATE_CART_ITEMS } = CART_ACTION_TYPES


export const CART_INITIAL_STATE = {
    cartDropdown: null,
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    currency: "EUR"
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action

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
            const { cartItems, totalItems, totalPrice } = payload
            return {
                ...state,
                cartItems: cartItems,
                totalItems: totalItems,
                totalPrice: totalPrice
            }
        default:
            return state
    }

}

export const updateCartItemsReducer = (newCartItems) => {
    let totalItems = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    let totalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

    let payload = {
        totalItems,
        totalPrice,
        cartItems: newCartItems
    }
    console.log("updateCartItemsReducer fired")
    return ({type:UPDATE_CART_ITEMS, payload})
    // dispatch({ type: UPDATE_CART_ITEMS, payload })
}

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


export const addItemToCart = (cartItems, productToAdd) => {
    console.log("addItemToCart fired")
    return addCardItem(cartItems, productToAdd)
}

export const decreaseItemFromCart = (cartItems, productToDecrease) => {
    console.log("decreaseItemFromCart fired")
    return decreaseCardItem(cartItems, productToDecrease)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    console.log("removeItemFromCart fired")
    return removeCartItem(cartItems, productToRemove)
}