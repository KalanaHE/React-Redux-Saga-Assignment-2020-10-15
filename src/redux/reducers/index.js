import { combineReducers } from "redux";
import getDistance from "./distance";

const rootReducer = combineReducers({
  getDistance: getDistance,
});

export default rootReducer;
