export const ADD_MESSAGE = "ADD-MESSAGE";
export const addMessageAC = (message) => {
  return { type: ADD_MESSAGE, payload: { message: message } };
};
