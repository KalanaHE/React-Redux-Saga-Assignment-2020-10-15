import { call, put, takeLatest } from "redux-saga/effects";

import { receiveAPIData } from "../actions";
import { fetchDistance } from "../../api/api";

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

    const distanceink = yield distance(
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

function distance(lat1, lon1, lat2, lon2, unit) {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "K") {
      dist = dist * 1.609344;
    }
    if (unit === "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}

//distance(33.0,65.0,41.0,20.0,'K')

//lat1, lon1, lat2, lon2, unit
