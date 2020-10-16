import { takeEvery, all } from "redux-saga/effects";

import getDistance from "./DistanceMeassure";
import getCountriesByName from "./SearchCountriesByName";

function* watchAll() {
  yield all([
    takeEvery("REQUEST_DISTANCE", getDistance),
    takeEvery("REQUEST_SEARCH_COUNTRIES_BY_NAME", getCountriesByName),
  ]);
}

export default watchAll;
