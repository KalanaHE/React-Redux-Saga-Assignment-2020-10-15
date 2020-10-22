import searchCountriesByName from "../../redux/reducers/searchCountriesByName";

describe("RECEIVE_SEARCH_COUNTRIES_BY_NAME", () => {
  test("returns the correct state", () => {
    const action = {
      type: "RECEIVE_SEARCH_COUNTRIES_BY_NAME",
      payload: { from: "UTC+04:00", to: "UTC+06:00" },
    };
    const expectedState = { from: "UTC+04:00", to: "UTC+06:00" };

    expect(
      searchCountriesByName({ from: "UTC+04:00", to: "UTC+06:00" }, action.type)
    ).toEqual(expectedState);

    // expect(searchCountriesByName({ country: "Ka" }, action)).toMatchSnapshot(); //SnapShot Test
  });
});
