/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import content from "../../../content/__mocks__";

import Blog from "../";

describe("Blog component", () => {
  it("should render correctly", () => {
    const component = shallow(<Blog content={content} />);
    expect(component).toMatchSnapshot();
  });
});
