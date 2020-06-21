import { ADD_MESSAGE } from "../actions/messages-actions";
import { loadMessages } from "../service/setMessages";

const loadedMessages = loadMessages();

let initialState = {
  messages: loadedMessages != null ? loadedMessages : [],
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat([
          {
            id: state.messages.length + 1,
            user: action.payload.message.user,
            message: action.payload.message.text,
            date: new Date().toLocaleTimeString(),
          },
        ]),
      };
    default:
      return state;
  }
};

export default MessagesReducer;
