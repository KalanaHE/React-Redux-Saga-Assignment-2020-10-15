import React from "react";
import { shallow } from "enzyme";

import DistanceMeasure from "../components/DistanceMessure-Test";

it("should have  2 text fileds and a button", () => {
  const wrapper = shallow(<DistanceMeasure />);
  const maindiv = wrapper.find("div");
  const card = wrapper.find("card");
  const textfield = wrapper.find("textfield");
  const button = wrapper.find("button");

  expect(maindiv.exists()).toBe(true);
  expect(card.exists()).toBe(true);
  expect(textfield.exists()).toBe(true);
  expect(button.exists()).toBe(true);
});
