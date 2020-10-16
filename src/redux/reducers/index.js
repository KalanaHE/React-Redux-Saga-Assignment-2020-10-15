import { combineReducers } from "redux";
import getDistance from "./distance";
import getCountriesByName from "./searchCountriesByName";

const rootReducer = combineReducers({
  Distance: getDistance,
  CountriesByName: getCountriesByName,
});

export default rootReducer;
