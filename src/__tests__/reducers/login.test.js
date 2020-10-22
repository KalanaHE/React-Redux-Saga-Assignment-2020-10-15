import login from "../../redux/reducers/loginReducer";

describe("CHANGE_LOGIN_STATE", () => {
  test("returns the correct state", () => {
    const action = {
      type: "CHANGE_LOGIN_STATE",
      payload: { isLogged: true },
    };
    const expectedState = { isLogged: true };

    expect(login({ isLogged: true }, action.type)).toEqual(expectedState);
  });
});
