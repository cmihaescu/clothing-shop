import { CATEGORY_ACTION_TYPES } from "./category-types";
import { createAction } from "../../utils/reducer.utils";

const {SET_CATEGORIES} = CATEGORY_ACTION_TYPES

export const setCategories = (categoriesArray) => {
    return createAction(SET_CATEGORIES, categoriesArray)
}

    

  