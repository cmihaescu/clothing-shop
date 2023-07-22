import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../store/cart/cart-actions'
import './cart-item.styles.scss'
import { selectCartCurrency, selectCartItems } from '../../store/cart/cart-selectors'

export const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    const currency = useSelector(selectCartCurrency)
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const handleRemoveFromCart = () => dispatch(removeItemFromCart(cartItems, cartItem))

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price}&nbsp;{currency}</span>
                <span onClick={handleRemoveFromCart}><RemoveIcon className='removeIcon' /></span>
            </div>
        </div>
    )
}