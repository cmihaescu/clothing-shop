import { takeLatest, all, call, put } from "redux-saga/effects"; 
import { fetchCategoriesSuccess, fetchCategoriesFailure } from "./category-actions";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { CATEGORY_ACTION_TYPES } from "./category-types";

export function* fetchCategoriesAsync() { 
    try {
    const categoriesArray = yield call(getCategoriesAndDocuments,'categories');
    yield put(fetchCategoriesSuccess(categoriesArray))
} catch (error) {
    yield put(fetchCategoriesFailure(error))
    }
}

export function* onFetchCategories () {
    yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)])
}