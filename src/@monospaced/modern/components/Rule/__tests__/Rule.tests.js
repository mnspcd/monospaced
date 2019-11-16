/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Rule from "../Rule";

describe("Rule component", () => {
  it("should render correctly", () => {
    const component = render(<Rule />);
    expect(component).toMatchSnapshot();
  });
});
