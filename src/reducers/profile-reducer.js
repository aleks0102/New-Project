import { CHANGE_AVA, CHANGE_USER, DELETE_AVA } from "../actions/profile-action";

let initialState = {
  user: {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  },
  avatar: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload.user,
      };

    case CHANGE_AVA:
      return { ...state, avatar: action.payload.avatar };

    case DELETE_AVA:
      return {
        ...state,
        avatar: null,
      };

    default:
      return state;
  }
};

export default ProfileReducer;
