import React from "react";
import { shallow } from "enzyme";

import ListContainer from "../components/ListContainer";

it("should have  2 text fileds and a button", () => {
  const wrapper = shallow(<ListContainer />);
  const list = wrapper.find("list");

  expect(list.exists()).toBe(true);
  expect(list.props()).toEqual({ children: undefined });
});
