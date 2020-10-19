import React from "react";
import { shallow } from "enzyme";

import ListItem from "../components/CountryListItem";

it("should have  main div and list item and listitemtext", () => {
  const wrapper = shallow(<ListItem />);
  const maindiv = wrapper.find("div");
  const listitem = wrapper.find("listitem");
  const listitemtext = wrapper.find("listitemtext");

  expect(maindiv.exists()).toBe(true);
  expect(listitem.exists()).toBe(true);
  expect(listitemtext.exists()).toBe(true);
});
