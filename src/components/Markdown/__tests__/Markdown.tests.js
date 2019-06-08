/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Markdown, { components } from "../";

describe("Markdown component", () => {
  it("should render correctly", () => {
    const component = render(<Markdown>children</Markdown>);
    expect(component).toMatchSnapshot();
  });

  it("should render pre component correctly", () => {
    const Pre = components.pre;
    const component = render(<Pre>children</Pre>);
    expect(component).toMatchSnapshot();
  });
});
