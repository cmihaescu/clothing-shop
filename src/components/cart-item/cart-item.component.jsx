import { useContext } from 'react'
import './cart-item.styles.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'

export const CartItem = ({ cartItem }) => {
    const { name, quantity, imageUrl, price } = cartItem
    const {currency} = useContext(CartDropdownContext)
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}></img>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {currency}{price}</span>
            </div>
        </div>
    )
}