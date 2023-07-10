import './navigation.styles.scss'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as RevolutLogo } from '../../assets/revolut.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase.utils'
import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import Button from '../../components/button/button.component'


const Navigation = () => {
    const { currenUser } = useContext(UserContext)
    const {cartDropdown, setCartDropdown} = useContext(CartDropdownContext)
    const cartDropdownHandler = () => {
        cartDropdown?
        setCartDropdown(false):
        setCartDropdown(true)
    }
   
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to="/">
                    <RevolutLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='shop'>
                        Shop
                    </Link>
                    {currenUser?
                    <Link className='nav-link' onClick={signOutUser}>
                        Sign Out
                    </Link>
                    : <Link className='nav-link' to='authentication'>
                    Sign In
                </Link>}
                <CartIcon />
                <Button onClick={cartDropdownHandler}>Test</Button>
                </div>
                {cartDropdown? <CartDropdown/>: ""}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation