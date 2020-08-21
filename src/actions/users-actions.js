import {
  saveUsers,
  saveCurrentUser,
  saveStatus,
} from "../service/saveUserData";
export const LOG_IN = "LOG-IN";
export const LOG_OUT = "LOG-OUT";
export const REGISTRATION = "REGISTRATION";
export const SET_CURRENT_USER = "SET-CURRENT-USER";

export const registration = (user) => (dispatch, getState) => {
  dispatch({ type: REGISTRATION, payload: { user: user } });
  saveUsers(getState().users.users);
};

export const logIn = (token, id) => {
  return { type: LOG_IN, payload: { token: token, id: id } };
};

export const logOut = () => (dispatch, getState) => {
  dispatch({ type: LOG_OUT });
};
