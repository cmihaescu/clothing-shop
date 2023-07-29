import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import { USER_ACTION_TYPES } from "./user-types";
import { signInSuccess, signInFailed } from "./user-actions";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

const { CHECK_USER_SESSION } = USER_ACTION_TYPES;

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
