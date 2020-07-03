export const LOG_IN = "LOG-IN";

export const LOG_OUT = "LOG-OUT";

export const logIn = () => {
  return { type: LOG_IN };
};

export const logOut = () => {
  return { type: LOG_OUT };
};
