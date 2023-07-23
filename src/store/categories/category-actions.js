import { CATEGORY_ACTION_TYPES } from "./category-types";
import { createAction } from "../../utils/reducer.utils";
import {getCategoriesAndDocuments} from  "../../utils/firebase.utils";

const { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_START} = CATEGORY_ACTION_TYPES

export const fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START)
    

export const fetchCategoriesSuccess = (categoriesArray) => createAction(FETCH_CATEGORIES_SUCCESS, categoriesArray)


export const fetchCategoriesFailure = (error) => createAction(FETCH_CATEGORIES_FAILED, error)


//Thunk async function//
export const fetchCategoriesAsync = () => async (dispatch) => {
dispatch(fetchCategoriesStart())
try {
    const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesSuccess(categoriesArray))
} catch (error) {
        dispatch(fetchCategoriesFailure(error))
    }
}