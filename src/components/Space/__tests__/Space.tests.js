/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Space from "../Space";

describe("Space component", () => {
  it("should render correctly", () => {
    const component = render(<Space>children</Space>);
    expect(component).toMatchSnapshot();
  });
});
