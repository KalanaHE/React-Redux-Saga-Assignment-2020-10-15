import React from "react";
import { shallow } from "enzyme";

import DistanceMeasure from "../components/DistanceMessure-Test";

it("should render a paragraph", () => {
  const wrapper = shallow(<DistanceMeasure />);
  const content = wrapper.find("Typography.ss");

  expect(content.exists()).toBe(true);
});
