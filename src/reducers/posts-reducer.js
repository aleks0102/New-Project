import { SORT, SET_MYPOSTS, SET_ALLPOSTS } from "../actions/post-actions";

const initialState = {
  myPosts: [],
  allPosts: [],
  firstPostId: null,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MYPOSTS: {
      return {
        ...state,
        myPosts: action.payload.posts,
        firstPostId: action.payload.posts[0].id || 1,
      };
    }

    case SET_ALLPOSTS:
      return {
        ...state,
        allPosts: action.payload.posts,
      };

    case SORT:
      return {
        ...state,
        myPosts: action.payload.posts,
      };

    default:
      return state;
  }
};

export default PostsReducer;
