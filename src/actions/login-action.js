export const LOG_IN = "LOG-IN";

export const LOG_OUT = "LOG-OUT";

export const logIn = (login, password) => {
  return { type: LOG_IN, payload: { login: login, password: password } };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
