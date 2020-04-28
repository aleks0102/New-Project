import { ADD_POST, SHOW, CHANGE_BODY } from "../actions/post-actions";

let initialState = {
  posts: [],
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

    case CHANGE_BODY:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.id) {
            return { ...p, body: action.payload.body, isShowed: false };
          }
          return p;
        }),
      };

    case SHOW:
      return {
        ...state,
        posts: state.posts.map((p) => {
          if (p.id === action.id) {
            return { ...p, isShowed: true };
          }

          return p;
        }),
      };
    default:
      return state;
  }
};

export default ProfileReducer;
