import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action REQUEST_SEARCH_CLOSEST_COUNTRY", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: {
          country: "LKA",
        },
        type: "REQUEST_SEARCH_CLOSEST_COUNTRY",
      },
    ];

    store.dispatch(
      selectActions.requestClosestCountry({
        country: "LKA",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
