import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action RECEIVE_SEARCH_CLOSEST_COUNTRY", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: { country: "LKA" },
        type: "RECEIVE_SEARCH_CLOSEST_COUNTRY",
      },
    ];

    store.dispatch(selectActions.receiveClosestCountry({ country: "LKA" }));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
