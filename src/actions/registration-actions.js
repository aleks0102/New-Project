import { saveUsers } from "../service/setUsers";

export const REGISTRATION = "REGISTRATION";

export const registration = (user) => (dispatch, getState) => {
  dispatch({ type: REGISTRATION, payload: { user: user } });
  saveUsers(getState().userData.users);
};
