export const ADD_POST = "ADD-POST";
export const CHANGE_TEXT = "CHANGE-BODY";

export const addPost = (post) => {
  return { type: ADD_POST, payload: { post: post } };
};

export const changeText = (id, newPost) => {
  return { type: CHANGE_TEXT, id, payload: { newPost: newPost } };
};
