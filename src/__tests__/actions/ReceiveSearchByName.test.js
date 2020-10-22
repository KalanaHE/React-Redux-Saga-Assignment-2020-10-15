import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action RECEIVE_SEARCH_COUNTRIES_BY_NAME", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: { country: "Ka" },
        type: "RECEIVE_DISTANCE",
      },
    ];

    store.dispatch(
      selectActions.receiveDistance({
        country: "Ka",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
