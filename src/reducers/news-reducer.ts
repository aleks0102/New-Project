import { SET_DATA } from "../actions/news-actions";

const initialState = {
  news: [] as any[],
};

const NewsReducer = (state = initialState, action:any) => {
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
