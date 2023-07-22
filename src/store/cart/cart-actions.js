import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../utils/reducer.utils"

const {SET_CART_DROPDOWN, UPDATE_CART_ITEMS, SET_CURRENCY} = CART_ACTION_TYPES


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
    const newCartItems = addCardItem(cartItems, productToAdd)
    console.log("new cart items", newCartItems)
    return createAction(UPDATE_CART_ITEMS, newCartItems)
}

export const decreaseItemFromCart = (cartItems, productToDecrease) => {
    const newCartItems = decreaseCardItem(cartItems, productToDecrease)
    return createAction(UPDATE_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(UPDATE_CART_ITEMS, newCartItems)
}

export const setCartDropdown = (boolean) => {
    
    return createAction(SET_CART_DROPDOWN, boolean)
}

export const setCurrency = (currency) => {
    return createAction(SET_CURRENCY, currency)
}