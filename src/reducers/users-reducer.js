import {
  REGISTRATION,
  SET_CURRENT_USER,
  LOG_IN,
  LOG_OUT,
} from "../actions/users-actions";
import { loadUsers, loadStatus } from "../service/saveUserData";

const loadedUsers = loadUsers();
const loadedStatus = loadStatus();

let initialState = {
  users: loadedUsers ? loadedUsers : [],
  currentUser: null,
  isAutorized: loadedStatus ? loadedStatus : false,
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

    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };

    case LOG_IN:
      return {
        ...state,
        isAutorized: true,
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
