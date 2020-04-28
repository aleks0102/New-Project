export const ADD_POST = "ADD-POST";
export const CHANGE_BODY = "CHANGE-BODY";
export const SHOW = "SHOW";

export const addPostAC = (title, body) => {
  return { type: ADD_POST, payload: { title: title, body: body } };
};

export const changeBody = (id, body) => {
  return { type: CHANGE_BODY, id, payload: { body: body } };
};

export const ShowAC = (id) => {
  return { type: SHOW, id };
};

