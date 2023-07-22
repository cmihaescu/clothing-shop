import { CART_ACTION_TYPES } from "./cart-types";
import { createAction } from "../../utils/reducer.utils";

const {SET_CURRENCY, SET_CART_DROPDOWN, UPDATE_CART_ITEMS} = CART_ACTION_TYPES

export const setCurrency = (currency) => {
    return createAction(SET_CURRENCY, currency)
}

export const setCartDropdown = (cartDropdown) => {
    return createAction(SET_CART_DROPDOWN, cartDropdown)
}

export const updateCart = (cart) => {
    return createAction(UPDATE_CART_ITEMS, cart)
}