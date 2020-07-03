import { LOG_IN, LOG_OUT } from "../actions/login-action";
import { REGISTRATION } from "../actions/registration-actions";

let initialState = {
  currentUser: {},
  isAutorized: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
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

export default AuthReducer;
