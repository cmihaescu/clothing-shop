import { CATEGORY_ACTION_TYPES } from "./category-types"
const {SET_CATEGORIES} = CATEGORY_ACTION_TYPES

export const CATEGORIES_INITIAL_STATE = {
    categories: []
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const {type, payload} = action

    switch(type){
        case SET_CATEGORIES:
            return {
                ...state, 
                categories:payload}
        default:
        return state
    }
}

