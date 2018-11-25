/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Markdown from "../Markdown";

describe("Markdown component", () => {
  it("should render correctly", () => {
    const component = render(<Markdown>children</Markdown>);
    expect(component).toMatchSnapshot();
  });
});
