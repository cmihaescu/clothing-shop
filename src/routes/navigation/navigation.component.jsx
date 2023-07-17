import './navigation.styles.scss'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as RevolutLogo } from '../../assets/revolut.svg'
import { signOutUser } from '../../utils/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import CurrencySwitcher from '../../components/currency-switcher/currency-switcher.component'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user-selector'


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const { cartDropdown } = useContext(CartDropdownContext)
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <RevolutLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>
                        Categories
                    </Link>
                    <Link className='nav-link' to='shop'>
                        Shop
                    </Link>
                    {currentUser ?
                        <Link className='nav-link' onClick={signOutUser}>
                            Sign Out
                        </Link>
                        : <Link className='nav-link' to='authentication'>
                            Sign In
                        </Link>}
                    <CartIcon />
                    <CurrencySwitcher />
                </div>
                {cartDropdown && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation