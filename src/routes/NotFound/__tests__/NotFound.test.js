import React from "react";
import { shallow } from "enzyme";

import content from "../../__mocks__/content";
import NotFound from "../NotFound";

describe("NotFound component", () => {
  it("should render correctly", () => {
    const component = shallow(<NotFound content={content} />);
    expect(component).toMatchSnapshot();
  });
});
