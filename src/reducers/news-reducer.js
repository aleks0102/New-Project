import { SET_DATA, SET_CURRENT_PAGE } from "../actions/news-actions";

const initialState = {
  news: [],
};

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        news: action.payload.news,
      };
      
    default:
      return state;
  }
};

export default NewsReducer;
