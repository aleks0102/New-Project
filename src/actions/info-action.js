export const SHOW_INFO = "SHOW-INFO";

export const CHANGE_TEXT = "CHANGE-TEXT";

export const CHANGE_AVA = "CHANGE-AVA";

export const showInfo = (id) => {
  return { type: SHOW_INFO, id };
};

export const changeTextInfo = (id, text) => {
  return { type: CHANGE_TEXT, id, payload: { text: text } };
};

export const changeAvatar = (image) => {
  return { type: CHANGE_AVA, payload: { image: image } };
};
