export const CHANGE_AVA = "CHANGE-AVA";
export const CHANGE_USER = "CHANGE-USER";

export const changeUser = (user) => {
  return { type: CHANGE_USER, payload: { user: user } };
};

export const changeAvatar = (avatar) => {
  return { type: CHANGE_AVA, payload: { avatar: avatar } };
};
