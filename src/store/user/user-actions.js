import { USER_ACTION_TYPES } from "./user-types";
import { createAction } from "../../utils/reducer.utils";

const {
  SET_CURRENT_USER,
  CHECK_USER_SESSION,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} = USER_ACTION_TYPES;

export const setCurrentUser = (user) => {
  return createAction(SET_CURRENT_USER, user);
};
// SET_CURRENT_USER:"SET_CURRENT_USER",
//     CHECK_USER_SESSION:" CHECK_USER_SESSION",
//     GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",
//     EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",
//     SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",
//     SIGN_IN_FAILURE:"SIGN_IN_FAILURE"

export const checkUserSession = () => createAction(CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) => createAction(SIGN_IN_SUCCESS, user);
export const signInFailed = (error) => createAction(SIGN_IN_FAILED, error);
