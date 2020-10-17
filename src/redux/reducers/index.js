import { combineReducers } from "redux";
import getDistance from "./distance";
import getCountriesByName from "./searchCountriesByName";
import getCountriesByTime from "./searchCountriesByTime";

const rootReducer = combineReducers({
  Distance: getDistance,
  CountriesByName: getCountriesByName,
  CountriesByTime: getCountriesByTime,
});

export default rootReducer;
