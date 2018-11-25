/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Logomark from "../Logomark";

describe("Logomark component", () => {
  it("should render correctly", () => {
    const component = render(<Logomark />);
    expect(component).toMatchSnapshot();
  });

  it("should render a title correctly", () => {
    const component = render(<Logomark title="Title" />);
    expect(component).toMatchSnapshot();
  });

  it("should render a second color correctly", () => {
    const component = render(<Logomark secondColor={"mnspcd-color-azure-4"} />);
    expect(component).toMatchSnapshot();
  });

  it("should render white as the default second color", () => {
    const component = render(<Logomark secondColor />);
    expect(component).toMatchSnapshot();
  });
});
