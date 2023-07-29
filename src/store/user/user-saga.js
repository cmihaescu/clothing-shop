import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import { USER_ACTION_TYPES } from "./user-types";
import { signInSuccess, signInFailed } from "./user-actions";
import { getCurrentUser } from "../../utils/firebase.utils";

const { CHECK_USER_SESSION } = USER_ACTION_TYPES;

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
  } catch (error) {}
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION);
}

export function* userSagas() {
  yield all([]);
}
