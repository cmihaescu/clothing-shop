import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cart;

export const selectCartDropdown = createSelector(
    [selectCartReducer],
    (cart) => cart.cartDropdown
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => 
    {console.log(cart.cartItems)
    return cart.cartItems}
)

export const selectCartTotalItems = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectCartTotalPrice = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)

export const selectCartCurrency = createSelector(
    [selectCartReducer],
    (cart) => cart.currency
)
