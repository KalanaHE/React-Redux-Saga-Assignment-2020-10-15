import React from "react";
import { shallow } from "enzyme";

import Home from "../components/Home-Screen-Test";

it("should render a paragraph", () => {
  const wrapper = shallow(<Home />);
  const p = wrapper.find("p");
  const result = p.text();

  expect(result).toBe(
    "ImmunifyMe is a cloud-based eco-system complete with a web interface, Mobile App and a Smart Card. We target to improve vaccination monitoring and surveillance systems to ensure up-to-date data critical to close the existing immunization gap. Individuals who rely on the medical system may find themselves in a dire situation: the most critical information about health and quality of life is the data which should guide future treatment that many healthcare providers can’t access right now. Monitoring data at subnational levels and reaching"
  );
});
