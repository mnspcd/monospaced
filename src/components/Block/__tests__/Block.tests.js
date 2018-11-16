import React from "react";
import { render } from "enzyme";

import Block from "../Block";

describe("Block component", () => {
  it("should render correctly", () => {
    const component = render(<Block>children</Block>);
    expect(component).toMatchSnapshot();
  });
});
