import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss'
import { selectCartDropdown, selectCartTotalItems } from '../../store/cart/cart-selectors';
import { setCartDropdown } from '../../store/cart/cart-actions';

export const CartIcon = () => {
    const dispatch = useDispatch()
    const cartDropdown = useSelector(selectCartDropdown)
    const totalItems = useSelector(selectCartTotalItems)
    const toggleCartDropdown = () => { dispatch(setCartDropdown(!cartDropdown)) }

    return (
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <ShoppingIcon className='shopping-icon'></ShoppingIcon>
            <span className='item-count'>{totalItems}</span>
        </div>
    )
}