import { createStore, combineReducers, applyMiddleware } from "redux";
import ProfileReducer from "./reducers/profile-reducer";
import DialogReducer from "./reducers/dialog-reducer";
import NewsReducer from "./reducers/news-reducer";
import InfoReducer from "./reducers/info-reducer";
import LoginReducer from "./reducers/login-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { saveState, loadState } from "./localstorage";

let reducers = combineReducers({
  profilePage: ProfileReducer,
  dialogPage: DialogReducer,
  newsPage: NewsReducer,
  infoPage: InfoReducer,
  loginPage: LoginReducer,
});

const persistedState = loadState();

let store = createStore(
  reducers,
  persistedState,
  applyMiddleware(logger, thunk)
);
store.subscribe(() => saveState(store.getState()));

export default store;
