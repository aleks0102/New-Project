import { saveMessages } from "../service/setMessages";

export const ADD_MESSAGE = "ADD-MESSAGE";
export const addMessage = (message) => (dispatch, getState) => {
  dispatch({ type: ADD_MESSAGE, payload: { message: message } });
  saveMessages(getState().messagesPage.messages);
};
