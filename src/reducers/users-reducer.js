import {
  LOG_IN,
  LOG_OUT,
  END_SESSION,
  SET_RESPONSE,
  SAVE_PROFILE,
} from "../actions/users-actions";
import {
  loadStatus,
  loadToken,
  loadCurrentId,
  loadUserName,
} from "../service/saveUserData";

const initialState = {
  isAuthorized: loadStatus() || false,
  token: loadToken() || null,
  currentId: loadCurrentId() || null,
  username: loadUserName() || null,
  endSessionMessage: false,
  needToReload: false,
  toggleResponse: false,
  responseText: null,
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthorized: true,
        token: action.payload.data.token,
        currentId: action.payload.data.profile.id,
        username: action.payload.data.username,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuthorized: false,
        token: null,
        currentId: null,
      };

    case END_SESSION:
      return {
        ...state,
        endSessionMessage: action.payload.value,
        needToReload: action.payload.reload,
      };

    case SET_RESPONSE:
      return {
        ...state,
        toggleResponse: action.payload.value,
        responseText: action.payload.text,
      };

    default:
      return state;
  }
};

export default UsersReducer;
