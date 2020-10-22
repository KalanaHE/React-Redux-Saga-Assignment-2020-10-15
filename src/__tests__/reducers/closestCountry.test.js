import closestCountry from "../../redux/reducers/closestCountry";

describe("REQUEST_SEARCH_CLOSEST_COUNTRY", () => {
  test("returns the correct state", () => {
    const action = {
      type: "REQUEST_SEARCH_CLOSEST_COUNTRY",
      payload: { country: "LKA" },
    };
    const expectedState = { country: "LKA" };

    expect(closestCountry({ country: "LKA" }, action.type)).toEqual(
      expectedState
    );
  });
});
