export const SHOW = "SHOW";
export const HIDE = "HIDE";
export const SET_DATA = "SET-DATA";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

export const ShowAC = (id) => {
  return { type: SHOW, id };
};

export const HideAC = (id) => {
  return { type: HIDE, id };
};

export const SetDataAC = (news) => {
  return { type: SET_DATA, payload: { news: news } };
};

export const setCurrentPageAC = (currentPage) => {
  return { type: SET_CURRENT_PAGE, payload: { currentPage: currentPage } };
};
