import {
  REGISTRATION,
  LOG_IN,
  LOG_OUT,
} from "../actions/users-actions";

let initialState = {
  isAutorized: false,
  token: null,
  currentUserId: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION:
      return {
        ...state,
        users: state.users.concat([
          {
            userId: state.users.length + 1,
            login: action.payload.user.login,
            password: action.payload.user.password,
          },
        ]),
      };

    case LOG_IN:
      return {
        ...state,
        isAutorized: true,
        token: action.payload.token,
        currentUserId: action.payload.id,
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

export default UsersReducer;
