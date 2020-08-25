import { createStore, combineReducers, applyMiddleware } from "redux";
import MessagesReducer from "./reducers/messages-reducer";
import NewsReducer from "./reducers/news-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import PostsReducer from "./reducers/posts-reducer";
import UsersReducer from "./reducers/users-reducer";

let reducers = combineReducers({
  messages: MessagesReducer,
  news: NewsReducer,
  posts: PostsReducer,
  users: UsersReducer,
});

let store = createStore(reducers, applyMiddleware(logger, thunk));
store.subscribe(() => store.getState());

export default store;
