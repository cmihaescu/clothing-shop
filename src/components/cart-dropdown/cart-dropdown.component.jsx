import { useContext } from 'react'
import Button from '../button/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { Link } from 'react-router-dom'

export const CartDropdown = () => {
    const { cartItems, setCartDropdown, cartDropdown } = useContext(CartDropdownContext)

    const handleCheckoutButtonClick = () => {
        setCartDropdown(!cartDropdown)
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <Link to={'checkout'}>
                <Button onClick={handleCheckoutButtonClick} type=''> GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}