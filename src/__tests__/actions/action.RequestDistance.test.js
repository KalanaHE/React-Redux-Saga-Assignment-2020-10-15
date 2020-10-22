import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action REQUEST_DISTANCE", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: {
          from: "LK",
          to: "IN",
        },
        type: "REQUEST_DISTANCE",
      },
    ];

    store.dispatch(
      selectActions.requestDistance({
        from: "LK",
        to: "IN",
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
