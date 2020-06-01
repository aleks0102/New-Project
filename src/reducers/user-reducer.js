import { LOG_IN, LOG_OUT } from "../actions/login-action";
import { REGISTRATION } from "../actions/registration-actions";

let initialState = {
  user: {
    login: null,
    password: null,
  },
  isAutorized: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        user: {
          login: action.payload.user.login,
          password: action.payload.user.password,
        },
        isAutorized: false,
      };

    case LOG_IN:
      return {
        ...state,
        isAutorized:
          action.payload.login == state.user.login &&
          action.payload.password == state.user.password
            ? true
            : false,
      };

    case LOG_OUT:
      return {
        ...state,
        isAutorized: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
