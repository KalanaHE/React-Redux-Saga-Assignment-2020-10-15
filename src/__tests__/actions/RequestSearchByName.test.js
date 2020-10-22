import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action REQUEST_SEARCH_COUNTRIES_BY_NAME", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: { country: "Ka" },
        type: "REQUEST_SEARCH_COUNTRIES_BY_NAME",
      },
    ];

    store.dispatch(
      selectActions.requestSearchByName({
        country: "Ka",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
