import { call, put, takeLatest } from "redux-saga/effects";

import { receiveAPIData } from "../actions";
import { fetchDistance } from "../../api/api";

import findDistance from "../../Functions/FindDistance";

function* getApiData(action) {
  try {
    const data = yield call(fetchDistance);
    // console.log(action.payload);
    // console.log(data);

    const fromCountry = yield data.find(
      (country) => country.alpha2Code === action.payload.from
    );

    const toCountry = yield data.find(
      (country) => country.alpha2Code === action.payload.to
    );

    // console.log(fromCountry.latlng);

    const distanceink = yield findDistance(
      fromCountry.latlng[0],
      fromCountry.latlng[1],
      toCountry.latlng[0],
      toCountry.latlng[1],
      "K"
    );

    // console.log(distanceink);

    yield put(receiveAPIData(distanceink));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest("REQUEST_API_DATA", getApiData);
}
