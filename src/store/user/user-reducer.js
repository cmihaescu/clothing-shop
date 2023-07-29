import { USER_ACTION_TYPES } from "./user-types";
const { SET_CURRENT_USER, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } =
  USER_ACTION_TYPES;

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case SIGN_IN_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
