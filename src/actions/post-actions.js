export const SET_MYPOSTS = "SET-MYPOSTS";
export const SET_ALLPOSTS = "SET-ALLPOSTS";
export const ADD_POST = "ADD-POST";
export const CHANGE_TEXT = "CHANGE-BODY";
export const SORT = "SORT";

export const setMyPosts = (posts) => {
  return { type: SET_MYPOSTS, payload: { posts: posts } };
};

export const setAllPosts = (posts) => {
  return { type: SET_ALLPOSTS, payload: {posts: posts}}
}

export const addPost = (post) => {
  return { type: ADD_POST, payload: { post: post } };
};

export const changeText = (id, newPost) => {
  return { type: CHANGE_TEXT, id, payload: { newPost: newPost } };
};

export const sortByDate = (posts) => {
  return { type: SORT, payload: { posts: posts } };
};
