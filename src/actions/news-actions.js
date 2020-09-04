export const SET_DATA = "SET-DATA";
export const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";

export const setNews = (news) => {
  return { type: SET_DATA, payload: { news: news } };
};
