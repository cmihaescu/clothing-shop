import { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { useDispatch, useSelector } from 'react-redux';
import { cartDropdownSelector } from '../../store/cart/cart-selectors';
import { setCartDropdown } from '../../store/cart/cart-actions';

export const CartIcon = () => {
    const { totalItems } = useContext(CartDropdownContext)
    const dispatch = useDispatch()
    const cartDropdown = useSelector(cartDropdownSelector)

    const toggleCartDropdown = () => { dispatch(setCartDropdown(!cartDropdown)) }

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{totalItems}</span>
        </div>
    )
}