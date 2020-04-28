export const LOGGED_IN = "LOGGED-IN";

export const LOG_OUT = "LOG-OUT";

export const loggedInAC = (login, password) => {
  return { type: LOGGED_IN, payload: { login: login, password: password } };
};

export const loggedOutAC = () => {
  return { type: LOG_OUT };
};
