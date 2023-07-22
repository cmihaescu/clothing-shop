import './product-card.styles.scss'
import Button from '../button/button.component'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCurrency, selectCartItems } from '../../store/cart/cart-selectors'
import { addItemToCart } from '../../store/cart/cart-actions'

export const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product
    const dispatch = useDispatch()
    const currency = useSelector(selectCartCurrency)
    const cartItems = useSelector(selectCartItems)
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

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