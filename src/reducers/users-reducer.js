import { REGISTRATION } from "../actions/registration-actions";
import { loadUsers } from "../service/setUsers";

const loadedUsers = loadUsers();

let initialState = {
  users: loadedUsers ? loadedUsers : [],
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
    default:
      return state;
  }
};

export default UsersReducer;
