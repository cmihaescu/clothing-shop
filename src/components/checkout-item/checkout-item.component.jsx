import { ReactComponent as ArrowRight } from '../../assets/round-alt-arrow-right-svgrepo-com.svg'
import { ReactComponent as ArrowLeft } from '../../assets/round-alt-arrow-left-svgrepo-com.svg'
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'
import { useSelector, useDispatch } from 'react-redux'
import './checkout-item.styles.scss'
import { selectCartCurrency, selectCartItems } from '../../store/cart/cart-selectors'
import { addItemToCart, removeItemFromCart, decreaseItemFromCart } from '../../store/cart/cart-actions'

export const CheckoutItem = ({ product }) => {
    const dispatch = useDispatch();
    const currency = useSelector(selectCartCurrency)
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = product
    const handleAmountIncrease = () => dispatch(addItemToCart(cartItems,product))
    const handleAmountDecrease = () => dispatch(decreaseItemFromCart(cartItems, product))
    const handleRemoveFromCart = () => dispatch(removeItemFromCart(cartItems, product))

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