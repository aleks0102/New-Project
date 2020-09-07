export const SET_DATA = "SET-DATA";

export const setNews = (news) => {
  return { type: SET_DATA, payload: { news: news } };
};
