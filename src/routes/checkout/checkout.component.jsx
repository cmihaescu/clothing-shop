import { useContext } from "react"
import { CartDropdownContext } from "../../contexts/cart-dropdown.context"
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component"
import './checkout.styles.scss'
import { useSelector } from "react-redux"
import { currencySelector } from "../../store/cart/cart-selectors"

export const Checkout = () => {
    const currency = useSelector(currencySelector)

    const { cartItems, totalPrice } = useContext(CartDropdownContext)
    return (
        <div>
            {cartItems.length > 0 ?
                <>
                    <div className="table-columns">
                        <span>Product</span>
                        <span>Description</span>
                        <span>Quantity</span>
                        <span>Price</span>
                        <span>Remove</span>
                    </div>
                    {cartItems.map((item) => <CheckoutItem key={item.id} product={item} />)}
                    <div className="totalPriceBox">
                        TOTAL: {totalPrice} {currency}
                    </div>
                </>
                :
                <h3>You have no items in your cart</h3>
            }
        </div>
    )
}