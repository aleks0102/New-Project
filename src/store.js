import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./reducers/profile-reducer";
import MessagesReducer from "./reducers/messages-reducer";
import NewsReducer from "./reducers/news-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { saveState, loadState } from "./localstorage";
import AuthReducer from "./reducers/auth-reducer";
import PostsReducer from "./reducers/posts-reducer";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  messagesPage: MessagesReducer,
  newsPage: NewsReducer,
  authData: AuthReducer,
  postsData: PostsReducer,
});

// const persistedState = loadState();

let store = createStore(
  reducers,
  // persistedState,
  applyMiddleware(logger, thunk)
);
// store.subscribe(() => saveState(store.getState()));
store.subscribe(() => store.getState());

export default store;
