import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action REQUEST_SEARCH_COUNTRIES_BY_TIME", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: { from: "UTC+04:00", to: "UTC+06:30" },
        type: "REQUEST_SEARCH_COUNTRIES_BY_TIME",
      },
    ];

    store.dispatch(
      selectActions.requestSearchByTime({
        from: "UTC+04:00",
        to: "UTC+06:30",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
