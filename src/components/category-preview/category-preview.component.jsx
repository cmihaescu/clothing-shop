import { ProductCard } from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import './category-preview.styles.scss'

export const CategoryPreview = ({ title, products }) => {

    return (
        <div className='category-preview-container'>
            <h2><Link to={title} className='title'>{title.toUpperCase()}</Link></h2>
            <div className='preview'>
                {products
                    .filter((_, idx) => { return idx < 4 })
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />

                    })}
            </div>
        </div>
    )
}