import { combineReducers } from "redux";
import getDistance from "./distance";
import getCountriesByName from "./searchCountriesByName";

const rootReducer = combineReducers({
  getDistance: getDistance,
  getCountriesByName: getCountriesByName,
});

export default rootReducer;
