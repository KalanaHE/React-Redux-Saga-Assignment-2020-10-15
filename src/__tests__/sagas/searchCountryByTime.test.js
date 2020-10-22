import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

import searchByTime from "../../redux/sagas/SearchCountriesByTime";
import { fetchApi } from "../../api/api";

describe("Search Countries By Name", () => {
  it("First step done value should be false", () => {
    const gen = cloneableGenerator(searchByTime)();
    const result1 = gen.next();

    expect(result1.done).toBe(false);
  });

  it("Second step done value should be true", () => {
    const gen = cloneableGenerator(searchByTime)();
    gen.next();
    const result2 = gen.next();

    expect(result2.done).toBe(true);
  });
});
