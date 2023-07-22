import Button from '../button/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartDropdown, selectCartItems } from '../../store/cart/cart-selectors'
import { setCartDropdown } from '../../store/cart/cart-actions'

export const CartDropdown = () => {
    const dispatch = useDispatch()
    const cartDropdown = useSelector(selectCartDropdown)
    const cartItems = useSelector(selectCartItems)
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