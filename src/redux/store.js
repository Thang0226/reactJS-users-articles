import { userReducer } from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { compose } from "redux";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  userReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
