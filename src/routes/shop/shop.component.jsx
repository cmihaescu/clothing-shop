import { useContext } from 'react'
import SHOP_DATA from '../../shop-data.json'
import './shop.styles.scss'
import { ProductsContext } from '../../contexts/products.context'
import { ProductCard } from '../../components/product-card/product-card.component'

const Shop = () => {
  const {products} = useContext(ProductsContext)
    return (
      <div className='products-container'>
        {products.map((product) => {
         return <ProductCard key={product.id} product={product}></ProductCard>
        })}
      </div>
    )
  }

  export default Shop