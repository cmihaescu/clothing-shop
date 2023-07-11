import { useContext } from 'react'
import Button from '../button/button.component'
import { CartItem } from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'

export const CartDropdown = () => {
    const {cartItems} = useContext(CartDropdownContext)

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item=> <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button type=''> GO TO CHECKOUT</Button>
        </div>
    )
}