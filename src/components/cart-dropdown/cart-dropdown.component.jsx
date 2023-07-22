import { useContext } from 'react'
import Button from '../button/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { Link } from 'react-router-dom'
import { setCartDropdown } from '../../store/cart/cart-actions'
import { useDispatch, useSelector } from 'react-redux'
import { cartDropdownSelector } from '../../store/cart/cart-selectors'

export const CartDropdown = () => {
    const { cartItems} = useContext(CartDropdownContext)
    const dispatch =useDispatch()
    const cartDropdown = useSelector(cartDropdownSelector)

    const handleCheckoutButtonClick = () => {
        dispatch(setCartDropdown(!cartDropdown))
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length>0? 
                cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                :<span className='empty-cart-message'>Your cart is empty</span>
            }
            </div>
            <Link to={'checkout'}>
                <Button onClick={handleCheckoutButtonClick} type=''> GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}