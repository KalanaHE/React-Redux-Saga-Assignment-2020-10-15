import searchCountriesByName from "../../redux/reducers/searchCountriesByName";

describe("RECEIVE_SEARCH_COUNTRIES_BY_NAME", () => {
  test("returns the correct state", () => {
    const action = {
      type: "RECEIVE_SEARCH_COUNTRIES_BY_NAME",
      payload: { country: "Ka" },
    };
    const expectedState = { country: "Ka" };

    expect(searchCountriesByName({ country: "Ka" }, action.type)).toEqual(
      expectedState
    );

    // expect(searchCountriesByName({ country: "Ka" }, action)).toMatchSnapshot(); //SnapShot Test
  });
});
