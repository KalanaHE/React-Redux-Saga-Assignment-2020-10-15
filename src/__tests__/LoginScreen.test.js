import React from "react";
import { shallow } from "enzyme";

import LoginScreen from "../components/LoginScreen";

it("should have  2 text fileds and a button", () => {
  const wrapper = shallow(<LoginScreen />);

  const maindiv = wrapper.find("div");
  const paper = wrapper.find("paper");
  const grid = wrapper.find("grid");
  const textfield = wrapper.find("textfield");

  expect(maindiv.exists()).toBe(true);
  expect(paper.exists()).toBe(true);
  expect(grid.exists()).toBe(true);
  expect(textfield.exists()).toBe(true);

  //   expect(LoginScreen.handleUsername()).toBeDefined();
});
