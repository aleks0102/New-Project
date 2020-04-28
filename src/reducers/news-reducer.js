import {
  SHOW,
  HIDE,
  SET_DATA,
  SET_CURRENT_PAGE,
} from "../actions/news-actions";

let initialState = {
  news: [],
  pageSize: 10,
  currentPage: 1,
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        news: state.news.map((n) => {
          if (n.id === action.id) {
            return { ...n, isShowed: true };
          }

          return n;
        }),
      };

    case HIDE:
      return {
        ...state,
        news: state.news.map((n) => {
          if (n.id === action.id) {
            return { ...n, isShowed: false };
          }

          return n;
        }),
      };

    case SET_DATA:
      return {
        ...state,
        news: action.payload.news,
      };
      
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
    default:
      return state;
  }
};

export default NewsReducer;
