import { useContext } from 'react'
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import './cart-item.styles.scss'
import { useSelector } from 'react-redux'
import { currencySelector } from '../../store/cart/cart-selectors'

export const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    const { removeItemFromCart} = useContext(CartDropdownContext)
    const currency = useSelector(currencySelector)

    const handleRemoveFromCart = () => removeItemFromCart(cartItem)

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