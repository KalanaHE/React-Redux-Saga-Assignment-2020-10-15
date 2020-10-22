import * as selectActions from "../../redux/actions";

import configureStore from "redux-mock-store";

const mockStore = configureStore();
const store = mockStore();

describe("Action CHANGE_LOGIN_STATE", () => {
  test("Dispatches the correct action and payload", () => {
    const expectedActions = [
      {
        payload: {
          isLogged: true,
        },
        type: "CHANGE_LOGIN_STATE",
      },
    ];

    store.dispatch(
      selectActions.changeLoginState({
        isLogged: true,
      })
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
