export const ADD_POST = "ADD-POST";
export const CHANGE_TEXT = "CHANGE-BODY";

export const addPost = (title, body) => {
  return { type: ADD_POST, payload: { title: title, body: body } };
};

export const changeText = (id, title, body) => {
  return { type: CHANGE_TEXT, id, payload: { title: title, body: body } };
};
