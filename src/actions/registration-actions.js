export const REGISTRATION = "REGISTRATION";

export const registration = (user) => {
  return { type: REGISTRATION, payload: { user: user } };
};
