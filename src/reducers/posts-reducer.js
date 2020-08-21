import {
  ADD_POST,
  CHANGE_TEXT,
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

    case ADD_POST: {
      return {
        ...state,
        myPosts: state.myPosts.concat([
          {
            id: state.myPosts.length + 1,
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
        myPosts: state.myPosts.map((p) => {
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
        myPosts: action.payload.posts,
      };

    default:
      return state;
  }
};

export default PostsReducer;
