import {
  LOG_IN,
  LOG_OUT,
  END_SESSION,
  SET_RESPONSE,
} from "../actions/users-actions";
import {
  loadStatus,
} from "../service/saveUserData";

const initialState = {
  isAuthorized: loadStatus() || false,
  endSessionMessage: false,
  needToReload: false,
  toggleResponse: false,
  responseText: "",
};

const UsersReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthorized: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuthorized: false,

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
