/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

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

  it("should render a code language correctly", () => {
    const component = render(
      <Code.Block className="language-js">children</Code.Block>,
    );
    expect(component).toMatchSnapshot();
  });
});