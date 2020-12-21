import { createStore, combineReducers, applyMiddleware } from "redux";
import NewsReducer from "./reducers/news-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import PostsReducer from "./reducers/posts-reducer";
import UsersReducer from "./reducers/users-reducer";

const reducers = combineReducers({
  news: NewsReducer,
  posts: PostsReducer,
  users: UsersReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));
store.subscribe(() => store.getState());

export default store;
