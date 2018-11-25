/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Heading from "../Heading";

describe("Heading component", () => {
  it("should render correctly", () => {
    const component = render(<Heading>children</Heading>);
    expect(component).toMatchSnapshot();
  });

  it("should render heading color correctly", () => {
    const component = render(
      <Heading color="brand-primary-dark-color">children</Heading>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render heading level correctly", () => {
    const component = render(<Heading level="1">children</Heading>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H1 correctly", () => {
    const component = render(<Heading.H1>children</Heading.H1>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H2 correctly", () => {
    const component = render(<Heading.H2>children</Heading.H2>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H3 correctly", () => {
    const component = render(<Heading.H3>children</Heading.H3>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H4 correctly", () => {
    const component = render(<Heading.H4>children</Heading.H4>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H5 correctly", () => {
    const component = render(<Heading.H5>children</Heading.H5>);
    expect(component).toMatchSnapshot();
  });

  it("should render an H6 correctly", () => {
    const component = render(<Heading.H6>children</Heading.H6>);
    expect(component).toMatchSnapshot();
  });
});
