import './navigation.styles.scss'
import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as RevolutLogo } from '../../assets/revolut.svg'
import { UserContext } from '../../contexts/user.context'
import { signOutUser } from '../../utils/firebase.utils'

const Navigation = () => {
    const { currenUser } = useContext(UserContext)
   
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
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation