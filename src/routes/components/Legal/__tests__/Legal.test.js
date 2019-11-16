/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import content from "../../../content/__mocks__";

import Legal from "../";

describe("Legal component", () => {
  it("should render correctly", () => {
    const component = shallow(<Legal content={content} />);
    expect(component).toMatchSnapshot();
  });
});
