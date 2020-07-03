import { savePosts } from "../service/setPosts";

export const ADD_POST = "ADD-POST";
export const CHANGE_TEXT = "CHANGE-BODY";

export const addPost = (post) => (dispatch, getState) => {
  dispatch({ type: ADD_POST, payload: { post: post } });
  savePosts(getState().postsData.posts)
};

export const changeText = (id, newPost) => (dispatch, getState) =>{
  dispatch ({ type: CHANGE_TEXT, id, payload: { newPost: newPost } });
  savePosts(getState().postsData.posts)

};
