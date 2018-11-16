import React from "react";
import { render } from "enzyme";

import Blockquote from "../Blockquote";

describe("Blockquote component", () => {
  it("should render correctly", () => {
    const component = render(<Blockquote>children</Blockquote>);
    expect(component).toMatchSnapshot();
  });
});
