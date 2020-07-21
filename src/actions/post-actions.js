import { savePosts } from "../service/savePosts";

export const ADD_POST = "ADD-POST";
export const CHANGE_TEXT = "CHANGE-BODY";
export const SORT = "SORT";

export const addPost = (post) => (dispatch, getState) => {
  dispatch({ type: ADD_POST, payload: { post: post } });
  savePosts(getState().posts.posts);
};

export const changeText = (id, newPost) => (dispatch, getState) => {
  dispatch({ type: CHANGE_TEXT, id, payload: { newPost: newPost } });
  savePosts(getState().posts.posts);
};

export const sortByDate = (posts) => (dispatch, getState) => {
  dispatch ({ type: SORT, payload: { posts: posts } });
  savePosts(getState().posts.posts);
};
