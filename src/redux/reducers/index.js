import { combineReducers } from "redux";
import getDistance from "./distance";
import getCountriesByName from "./searchCountriesByName";
import getCountriesByTime from "./searchCountriesByTime";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
  isLogged: loginReducer,
  Distance: getDistance,
  CountriesByName: getCountriesByName,
  CountriesByTime: getCountriesByTime,
});

export default rootReducer;
