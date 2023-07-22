import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebase.utils'
import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'
import { setCategories } from '../../store/categories/category-actions'
import './shop.styles.scss' 

const Shop = () => {
const dispatch = useDispatch()

  useEffect(()=> {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray))
    }
    getCategoriesMap();
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} ></Route>
      <Route path={":category"} element={<Category />} ></Route>
    </Routes>
  )
}

export default Shop