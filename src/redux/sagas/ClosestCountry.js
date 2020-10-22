import { call, put } from "redux-saga/effects";

import { receiveClosestCountry } from "../actions";
import { fetchApi } from "../../api/api";

import GetClosestCountry from "../../Functions/GetClosestCountry";

export default function* getClosest(action) {
  try {
    const data = yield call(fetchApi);

    const closest = GetClosestCountry(data, action.payload.country);

    yield put(receiveClosestCountry(closest));
  } catch (e) {
    // console.log(e);
    yield put(
      receiveClosestCountry(
        "Error getting closest country. please enter valid country code (EX: India => IND)!"
      )
    );
  }
}
