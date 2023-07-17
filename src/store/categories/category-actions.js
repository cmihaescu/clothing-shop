import { CATEGORY_ACTION_TYPES } from "./category-types";
import { createAction } from "../../utils/reducer.utils";

const {SET_CATEGORIES_MAP} = CATEGORY_ACTION_TYPES

export const setCategoriesMap = (categoriesMap) => {
    return createAction(SET_CATEGORIES_MAP, categoriesMap)
}

    

  