import {
  SORT,
  SET_MYPOSTS,
  SET_ALLPOSTS,
} from "../actions/post-actions";

let initialState = {
  myPosts: [],
  allPosts: [],
  idOfFirstPost: null,
};

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MYPOSTS: {
      return {
        ...state,
        myPosts: action.payload.posts,
        idOfFirstPost: action.payload.posts[0].id,
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
