import { ADD_POST, CHANGE_TEXT } from "../actions/post-actions";
import { loadPosts } from "../service/setPosts";
const loadedPosts = loadPosts();

let initialState = {
  posts: loadedPosts != null ? loadedPosts : [],
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: state.posts.concat([
          {
            id: state.posts.length + 1,
            title: action.payload.post.title,
            body: action.payload.post.body,
            date: new Date().toLocaleString(),
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
              title: action.payload.newPost.title
                ? action.payload.newPost.title
                : p.title,
              body: action.payload.newPost.body
                ? action.payload.newPost.body
                : p.body,
              isShowed: false,
            };
          }
          return p;
        }),
      };
    default:
      return state;
  }
};

export default PostsReducer;
