import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action RECEIVE_DISTANCE", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: {
          from: "LK",
          to: "IN",
        },
        type: "RECEIVE_DISTANCE",
      },
    ];

    store.dispatch(
      selectActions.receiveDistance({
        from: "LK",
        to: "IN",
      })
    );
    // expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot(); //snapshot test
  });
});
