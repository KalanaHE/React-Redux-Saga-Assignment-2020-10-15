import { takeEvery, all } from "redux-saga/effects";

import getDistance from "./DistanceMeassure";

function* watchAll() {
  yield all([
    takeEvery("REQUEST_DISTANCE", getDistance),
    // takeEvery("CREATE_USER_REQUESTED", createUser)
  ]);
}

export default watchAll;
