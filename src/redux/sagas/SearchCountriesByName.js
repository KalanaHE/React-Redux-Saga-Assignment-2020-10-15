import { call, put } from "redux-saga/effects";

import { receiveSearchByName } from "../actions";
import { fetchApi } from "../../api/api";

// import findDistance from "../../Functions/FindDistance";

export default function* getCountriesByName(action) {
  try {
    const searchkey = action.payload.country;
    const data = yield call(fetchApi);

    const countries = data.map((country) => {
      return { name: country.name.toUpperCase(), code: country.alpha2Code };
    });

    const filtered = countries.filter((country) => {
      return country.name.includes(searchkey);
    });

    yield put(receiveSearchByName(filtered));
  } catch (e) {
    // console.log(e);
    yield put(
      receiveSearchByName("Error searching! please enter valid keyword!")
    );
  }
}
