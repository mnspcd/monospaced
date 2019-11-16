/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import content from "../../../content/__mocks__";

import NotFound from "../";

describe("NotFound component", () => {
  it("should render correctly", () => {
    const component = shallow(<NotFound content={content} />);
    expect(component).toMatchSnapshot();
  });
});
