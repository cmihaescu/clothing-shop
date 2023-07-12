import { ReactComponent as ArrowRight } from '../../assets/round-alt-arrow-right-svgrepo-com.svg'
import { ReactComponent as ArrowLeft } from '../../assets/round-alt-arrow-left-svgrepo-com.svg'
import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'

export const CheckoutItem = ({ product }) => {
    const {decreaseItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartDropdownContext)
    const { name, imageUrl, price, quantity } = product
    const handleAmountIncrease = () => addItemToCart(product)
    const handleAmountDecrease = () => decreaseItemFromCart(product)
    const handleRemoveFromCart = () => removeItemFromCart(product)

    return (
        <div className="checkout-item-container">
            <img src={imageUrl} alt={name}></img>
            <span>{name}</span>
            <ArrowLeft onClick={handleAmountDecrease} className="quantity-svg" />
            <span className='quantity-container'>
                {quantity}
            </span>
            <ArrowRight onClick={handleAmountIncrease} className="quantity-svg" />
            <span>{price}</span>
            <span onClick={handleRemoveFromCart}>X</span>
        </div>
    )
}