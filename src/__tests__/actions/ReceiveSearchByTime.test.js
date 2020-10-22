import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action RECEIVE_SEARCH_COUNTRIES_BY_TIME", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: { name: "Afghanistan", timezone: "UTC+04:30", tzoneInt: 430 },
        type: "RECEIVE_SEARCH_COUNTRIES_BY_TIME",
      },
    ];

    store.dispatch(
      selectActions.receiveSearchByTime({
        name: "Afghanistan",
        timezone: "UTC+04:30",
        tzoneInt: 430,
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
