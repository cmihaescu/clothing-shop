import { CART_ACTION_TYPES } from "./cart-types";

const {SET_CURRENCY, SET_CART_DROPDOWN, UPDATE_CART_ITEMS} = CART_ACTION_TYPES

export const CART_INITIAL_STATE = {
    cartDropdown: false,
    cartItems: [],
    currency: "EUR"
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
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
            return {
                ...state,
                cartItems: payload
            }
        default:
            return state
    }

}
