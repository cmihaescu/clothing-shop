import { useContext } from "react"
import { CartDropdownContext } from "../../contexts/cart-dropdown.context"
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component"
import './checkout.styles.scss'

export const Checkout = () => {

    const { cartItems, totalPrice } = useContext(CartDropdownContext)
    return(
        <div>
            <div className="table-columns">
                <span>Product</span>
                <span>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
            {cartItems.map((item) => <CheckoutItem key={item.id} product={item}/>)}
            <div>
                TOTAL: ${totalPrice}
            </div>
        </div>
    )
}