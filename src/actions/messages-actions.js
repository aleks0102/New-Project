export const ADD_MESSAGE = "ADD-MESSAGE";
export const addMessage = (message) => (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE, payload: { message: message } });
};
