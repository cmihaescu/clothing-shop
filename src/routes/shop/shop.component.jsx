import { Fragment, useContext } from 'react'
import './shop.styles.scss'
import { CategoriesContext } from '../../contexts/categories.context'
import { CategoryPreview } from '../../components/category-preview/category-preview.component'

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map(title =>
        <Fragment>
          <CategoryPreview title={title} products={categoriesMap[title]}/>
        </Fragment>
      )}

    </div>
  )
}

export default Shop