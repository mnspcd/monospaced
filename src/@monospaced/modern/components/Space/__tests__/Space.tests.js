/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Space from "../Space";

describe("Space component", () => {
  it("should render correctly", () => {
    const component = render(<Space>children</Space>);
    expect(component).toMatchSnapshot();
  });
});
