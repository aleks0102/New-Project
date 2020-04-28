import { ADD_MESSAGE } from "../actions/dialog-actions";

let initialState = {
  messages: [],
};

const DialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat([
          {
            id: state.messages.length + 1,
            user: action.payload.user,
            message: action.payload.text,
            date: new Date().toLocaleTimeString(),
          },
        ]),
      };
    default:
      return state;
  }
};

export default DialogReducer;
