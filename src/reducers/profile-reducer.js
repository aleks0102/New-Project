import { ADD_POST, CHANGE_TEXT } from "../actions/post-actions";
import { CHANGE_AVA, CHANGE_USER } from "../actions/info-action";

let initialState = {
  posts: [],
  info: {
    name: "",
    lastname: "",
    phone: "",
    email: "",
  },
  avatar: null,
};

const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: state.posts.concat([
          {
            id: state.posts.length + 1,
            title: action.payload.title,
            body: action.payload.body,
            date: new Date().toLocaleTimeString(),
          },
        ]),
      };
    }

    case CHANGE_TEXT:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.id) {
            return {
              ...p,
              title: action.payload.title ? action.payload.title : p.title,
              body: action.payload.body ? action.payload.body : p.body,
              isShowed: false,
            };
          }
          return p;
        }),
      };

    case CHANGE_USER:
      return {
        ...state,
        info: {
          name: action.payload.user.name,
          lastname: action.payload.user.lastname,
          phone: action.payload.user.phone,
          email: action.payload.user.email,
        },
      };

    case CHANGE_AVA:
      return { ...state, avatar: action.payload.avatar };

    default:
      return state;
  }
};

export default ProfileReducer;
