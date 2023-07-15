import { ReactComponent as ArrowRight } from '../../assets/round-alt-arrow-right-svgrepo-com.svg'
import { ReactComponent as ArrowLeft } from '../../assets/round-alt-arrow-left-svgrepo-com.svg'
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'
import './checkout-item.styles.scss'
import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'

export const CheckoutItem = ({ product }) => {
    const { decreaseItemFromCart, addItemToCart, removeItemFromCart, currency } = useContext(CartDropdownContext)
    const { name, imageUrl, price, quantity } = product
    const handleAmountIncrease = () => addItemToCart(product)
    const handleAmountDecrease = () => decreaseItemFromCart(product)
    const handleRemoveFromCart = () => removeItemFromCart(product)

    return (
        <div className="checkout-item-container">
            <span><img src={imageUrl} alt={name}></img></span>
            <span>{name}</span>
            <div className='quantity-container'>
                <ArrowLeft onClick={handleAmountDecrease} className="quantity-svg" />
                <span>
                    {quantity}
                </span>
                <ArrowRight onClick={handleAmountIncrease} className="quantity-svg" />
            </div>
            <span>{price} &nbsp; {currency}</span>
            <span onClick={handleRemoveFromCart}><RemoveIcon className='removeIcon' /></span>
        </div>
    )
}