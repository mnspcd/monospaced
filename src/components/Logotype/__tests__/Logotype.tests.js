/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Logotype from "../Logotype";

describe("Logotype component", () => {
  it("should render correctly", () => {
    const component = render(<Logotype />);
    expect(component).toMatchSnapshot();
  });

  it("should render width correctly", () => {
    const component = render(<Logotype width="6rem" />);
    expect(component).toMatchSnapshot();
  });

  it("should render height correctly", () => {
    const component = render(<Logotype height="3rem" />);
    expect(component).toMatchSnapshot();
  });
});
