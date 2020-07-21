import { ADD_POST, CHANGE_TEXT, SORT } from "../actions/post-actions";
import { loadPosts } from "../service/savePosts";
const loadedPosts = loadPosts();

let initialState = {
  posts: loadedPosts ? loadedPosts : [],
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
            };
          }
          return p;
        }),
      };

    case SORT:
      return {
        ...state,
        posts: action.payload.posts,
      };

    default:
      return state;
  }
};

export default PostsReducer;
