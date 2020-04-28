export const ADD_MESSAGE = "ADD-MESSAGE";
export const addMessageAC = (user, text) => {
  return { type: ADD_MESSAGE, payload: { user: user, text: text } };
};
