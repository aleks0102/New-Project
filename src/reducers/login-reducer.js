import { LOGGED_IN, LOG_OUT } from "../actions/login-action";

let initialState = {
  user: {
    login: null,
    password: null,
  },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        user: {
          login: action.payload.login,
          password: action.payload.password,
        },
      };

    case LOG_OUT:
      return {
        ...state,
        user: {
          login: null,
          password: null,
        },
      };

    default:
      return state;
  }
};

export default LoginReducer;
