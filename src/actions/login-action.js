export const LOG_IN = "LOG-IN";

export const LOG_OUT = "LOG-OUT";

export const logIn = (user) => {
  return { type: LOG_IN, payload: { user: user } };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
