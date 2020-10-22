import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

import searchByName from "../../redux/sagas/SearchCountriesByName";
import { fetchApi } from "../../api/api";

describe("Search Countries By Name", () => {
  it("First step done value should be false", () => {
    const gen = cloneableGenerator(searchByName)();
    const result1 = gen.next();

    expect(result1.done).toBe(false);
  });

  it("Second step done value should be true", () => {
    const gen = cloneableGenerator(searchByName)();
    gen.next();
    const result2 = gen.next();

    expect(result2.done).toBe(true);
  });
});
