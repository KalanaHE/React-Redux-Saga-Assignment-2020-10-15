import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

import getClosest from "../../redux/sagas/ClosestCountry";
import { fetchApi } from "../../api/api";

describe("Get Closest Country", () => {
  it("First step done valuse should be false", () => {
    const gen = cloneableGenerator(getClosest)();
    const result1 = gen.next();

    expect(result1.done).toBe(false);
  });

  it("Second step done valuse should be false", () => {
    const gen = cloneableGenerator(getClosest)();
    gen.next();
    const result2 = gen.next();

    expect(result2.done).toBe(false);
  });

  it("Third step done valuse should be false", () => {
    const gen = cloneableGenerator(getClosest)();
    gen.next();
    gen.next();
    const result3 = gen.next();

    expect(result3.done).toBe(true);
  });
});
