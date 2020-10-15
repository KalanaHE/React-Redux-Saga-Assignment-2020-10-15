import { combineReducers } from "redux";
import fetchDistance from "./api";

const rootReducer = combineReducers({
  fetchDistance: fetchDistance,
});

export default rootReducer;
