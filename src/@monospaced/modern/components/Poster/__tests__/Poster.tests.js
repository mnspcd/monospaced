/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Poster from "../Poster";

describe("Poster component", () => {
  it("should render correctly", () => {
    const component = render(<Poster />);
    expect(component).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const component = render(<Poster>children</Poster>);
    expect(component).toMatchSnapshot();
  });

  it("should render padding correctly", () => {
    const component = render(<Poster padding="1em">children</Poster>);
    expect(component).toMatchSnapshot();
  });
});
