import { call, put, takeLatest } from "redux-saga/effects";

import { receiveDistance } from "../actions";
import { fetchApi } from "../../api/api";

import findDistance from "../../Functions/FindDistance";

function* getDistance(action) {
  try {
    const data = yield call(fetchApi);

    const fromCountry = yield data.find(
      (country) => country.alpha2Code === action.payload.from
    );

    const toCountry = yield data.find(
      (country) => country.alpha2Code === action.payload.to
    );

    const distanceink = yield findDistance(
      fromCountry.latlng[0],
      fromCountry.latlng[1],
      toCountry.latlng[0],
      toCountry.latlng[1],
      "K"
    );
    // console.log(distanceink);
    yield put(receiveDistance(distanceink + " KM"));
  } catch (e) {
    // console.log(e);
    yield put(
      receiveDistance(
        "Error calculationg distance. please enter valid country codes!"
      )
    );
  }
}

export default function* mySaga() {
  yield takeLatest("REQUEST_DISTANCE", getDistance);
}
