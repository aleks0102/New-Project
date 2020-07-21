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

export const setCurrentUser = (user) => (dispatch, getState) => {
  dispatch({ type: SET_CURRENT_USER, payload: { user: user } });
  saveCurrentUser(getState().users.currentUser);
};

export const logIn = () => (dispatch, getState) => {
  dispatch({ type: LOG_IN });
  saveStatus(getState().users.isAutorized);
};

export const logOut = () => (dispatch, getState) => {
  dispatch({ type: LOG_OUT });
  saveCurrentUser({});
  saveStatus(getState().users.isAutorized);
};
