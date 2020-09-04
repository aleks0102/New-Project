import { ADD_MESSAGE } from "../actions/messages-actions";

const initialState = {
  messages: [],
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
            date: new Date().toLocaleString(),
          },
        ]),
      };
    default:
      return state;
  }
};

export default MessagesReducer;
