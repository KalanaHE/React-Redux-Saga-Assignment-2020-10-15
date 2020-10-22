import { call, put } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";

import getDistance from "../../redux/sagas/DistanceMeassure";
import { fetchApi } from "../../api/api";

describe("Get Distance between two countries", () => {
  it("First step done value should be false", () => {
    const gen = cloneableGenerator(getDistance)();
    const result1 = gen.next();

    expect(result1.done).toBe(false);
  });

  it("Second step done value should be false", () => {
    const gen = cloneableGenerator(getDistance)();
    gen.next();
    const result2 = gen.next();

    expect(result2.done).toBe(false);
  });

  it("Third step done value should be true", () => {
    const gen = cloneableGenerator(getDistance)();
    gen.next();
    gen.next();
    const result3 = gen.next();

    expect(result3.done).toBe(true);
  });
});
