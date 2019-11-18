/* eslint-env jest */
import { mount, render } from "enzyme";
import React from "react";

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

  it("should handle default onClick function correctly", () => {
    const component = mount(<Button icon={<div />} />);

    component.simulate("click");

    expect(component).toMatchSnapshot();
  });

  it("should call onClick function correctly", () => {
    const mockFunction = jest.fn();

    const component = mount(<Button icon={<div />} onClick={mockFunction} />);

    expect(mockFunction).not.toHaveBeenCalled();

    component.simulate("click");

    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});
