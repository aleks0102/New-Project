import { saveProfiles } from "../service/saveProfiles";

export const SAVE_PROFILE = "SAVE-PROFILE";
export const CHANGE_PROFILE = "CHANGE-PROFILE";
export const CHANGE_AVA = "CHANGE-AVA";
export const DELETE_AVA = "DELETE-AVA";

// export const saveUser = () => (dispatch, getState) => {
//   dispatch({ type: SAVE_PROFILE });
// };

export const changeProfile = (user) => (dispatch, getState) => {
  dispatch({ type: CHANGE_PROFILE, payload: { user: user } });
};

export const changeAvatar = (avatar, userId) => (dispatch, getState) => {
  dispatch({ type: CHANGE_AVA, payload: { avatar: avatar, userId: userId } });
};

export const deleteAvatar = (userId) => (dispatch, getState) => {
  dispatch({ type: DELETE_AVA, payload: { userId: userId } });
};
