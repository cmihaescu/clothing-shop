import './product-card.styles.scss'
import Button from '../button/button.component'
import { useContext } from 'react'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context'
import { useSelector } from 'react-redux'
import { currencySelector } from '../../store/cart/cart-selectors'

export const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const {addItemToCart } = useContext(CartDropdownContext)
    const addProductToCart = () => addItemToCart(product) 
    const currency = useSelector(currencySelector)

    return(
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}></img>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price-and-currency'> {price} &nbsp; {currency}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart} >Add to cart</Button>
    </div>
    )
}