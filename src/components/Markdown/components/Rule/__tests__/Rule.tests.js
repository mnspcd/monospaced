/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Rule from "../Rule";

describe("Rule component", () => {
  it("should render correctly", () => {
    const component = render(<Rule />);
    expect(component).toMatchSnapshot();
  });
});
