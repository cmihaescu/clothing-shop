import { CATEGORY_ACTION_TYPES } from "./category-types";
import { createAction } from "../../utils/reducer.utils";

const { FETCH_CATEGORIES_FAILED, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_START} = CATEGORY_ACTION_TYPES

export const fetchCategoriesStart = () => createAction(FETCH_CATEGORIES_START)
    

export const fetchCategoriesSuccess = (categoriesArray) => createAction(FETCH_CATEGORIES_SUCCESS, categoriesArray)


export const fetchCategoriesFailure = (error) => createAction(FETCH_CATEGORIES_FAILED, error)

