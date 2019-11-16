/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Markdown, { mdxComponents } from "../";

describe("Markdown component", () => {
  it("should render correctly", () => {
    const component = render(<Markdown>children</Markdown>);
    expect(component).toMatchSnapshot();
  });

  it("should render pre component correctly", () => {
    const Pre = mdxComponents.pre;
    const component = render(<Pre>children</Pre>);
    expect(component).toMatchSnapshot();
  });
});
