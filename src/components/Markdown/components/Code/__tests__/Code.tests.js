/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Code from "../Code";

describe("Code component", () => {
  it("should render correctly", () => {
    const component = render(<Code>children</Code>);
    expect(component).toMatchSnapshot();
  });

  it("should render a code block correctly", () => {
    const component = render(<Code.Block>children</Code.Block>);
    expect(component).toMatchSnapshot();
  });

  it("should render a code block correctly in light mode", () => {
    const component = render(
      <Code.Block.LightMode>children</Code.Block.LightMode>,
    );
    expect(component).toMatchSnapshot();
  });
});
