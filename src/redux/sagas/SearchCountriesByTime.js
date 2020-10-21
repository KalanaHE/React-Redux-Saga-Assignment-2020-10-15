import { call, put } from "redux-saga/effects";

import { receiveSearchByTime } from "../actions";
import { fetchApi } from "../../api/api";

export default function* getCountriesByName(action) {
  try {
    const from = Number(action.payload.from.substring(3).replace(/:/g, ""));
    const to = Number(action.payload.to.substring(3).replace(/:/g, ""));

    const data = yield call(fetchApi);

    const timesZones = data.map((country) => {
      const inttime = country.timezones[0].substring(3).replace(/:/g, "");
      return {
        name: country.name,
        timezone: country.timezones[0],
        tzoneInt: Number(inttime),
      };
    });

    const filtered = timesZones.filter((country) => {
      if (country.tzoneInt > from && country.tzoneInt < to) {
        return {
          name: country.name,
          timezone: country.timezone,
        };
      }
    });

    // console.log(filtered);

    yield put(receiveSearchByTime(filtered));
  } catch (e) {
    // console.log(e);
    yield put(
      receiveSearchByTime("Error searching! please enter valid keyword!")
    );
  }
}
