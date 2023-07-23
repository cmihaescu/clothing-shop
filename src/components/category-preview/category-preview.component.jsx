import { ProductCard } from '../product-card/product-card.component'
import { Link } from 'react-router-dom'
import './category-preview.styles.scss'
import { Spinner } from '../spinner/spinner.component'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading } from '../../store/categories/category-selectors'

export const CategoryPreview = ({ title, products }) => {
    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <div className='category-preview-container'>
            <h2><Link to={title} className='title'>{title.toUpperCase()}</Link></h2>
            {
            isLoading?
            <Spinner />:
            <div className='preview'>
                {products
                    .filter((_, idx) => { return idx < 4 })
                    .map((product) => {
                        return <ProductCard key={product.id} product={product} />
                        
                    })}
            </div>
            }
        </div>
    )
}