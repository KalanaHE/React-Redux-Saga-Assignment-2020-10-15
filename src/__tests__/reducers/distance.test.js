import distance from "../../redux/reducers/distance";

describe("RECEIVE_DISTANCE", () => {
  test("returns the correct state", () => {
    const action = {
      type: "RECEIVE_DISTANCE",
      payload: "10KM",
    };
    const expectedState = "10KM";

    expect(distance("10KM", action.type)).toEqual(expectedState);
  });
});
