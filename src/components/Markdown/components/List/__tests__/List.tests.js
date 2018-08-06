import React from "react";
import { render } from "enzyme";

import List from "../List";

describe("List component", () => {
  it("should render correctly", () => {
    const component = render(<List>children</List>);
    expect(component).toMatchSnapshot();
  });

  it("should render an ordered list correctly", () => {
    const component = render(<List.Ordered>children</List.Ordered>);
    expect(component).toMatchSnapshot();
  });
});
