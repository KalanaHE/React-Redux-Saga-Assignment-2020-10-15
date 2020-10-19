import React from "react";
import { shallow } from "enzyme";

import NavBar from "../components/NavBar";

it("should have  5 nav buttons", () => {
  const wrapper = shallow(<NavBar />);

  const maindiv = wrapper.find("div");

  expect(maindiv.exists()).toBe(true);
});
