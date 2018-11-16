import React from "react";
import { render } from "enzyme";

import Button from "../Button";

describe("Button component", () => {
  it("should render correctly", () => {
    const component = render(<Button />);
    expect(component).toMatchSnapshot();
  });

  it("should render children correctly", () => {
    const component = render(<Button>children</Button>);
    expect(component).toMatchSnapshot();
  });

  it("should render an icon correctly", () => {
    const component = render(<Button icon={<div />}>children</Button>);
    expect(component).toMatchSnapshot();
  });

  it("should render an icon and no children correctly", () => {
    const component = render(<Button icon={<div />} />);
    expect(component).toMatchSnapshot();
  });
});
