/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import content from "../../../content/__mocks__";

import Home from "../";

describe("Home component", () => {
  it("should render correctly", () => {
    const component = shallow(<Home content={content} />);
    expect(component).toMatchSnapshot();
  });
});
