import {
  LOG_IN,
  LOG_OUT,
  END_SESSION,
} from "../actions/users-actions";
import {
  loadStatus,
  loadToken,
  loadCurrentId,
  loadUserName,
} from "../service/saveUserData";

let initialState = {
  isAutorized: loadStatus() ? loadStatus() : false,
  token: loadToken() ? loadToken() : null,
  currentUserId: loadCurrentId() ? loadCurrentId() : null,
  username: loadUserName() ? loadUserName() : null,
  showEndSessionMessage: false,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAutorized: true,
        token: action.payload.data.token,
        currentUserId: action.payload.data.profile.id,
        username: action.payload.data.username,
      };

    case LOG_OUT:
      return {
        ...state,
        isAutorized: false,
        token: null,
        currentUserId: null,
      };

    case END_SESSION:
      return {
        ...state,
        showEndSessionMessage: action.payload.value,
      };

    default:
      return state;
  }
};

export default UsersReducer;
