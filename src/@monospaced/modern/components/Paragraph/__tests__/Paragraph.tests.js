/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Paragraph from "../Paragraph";

describe("Paragraph component", () => {
  it("should render correctly", () => {
    const component = render(<Paragraph>children</Paragraph>);
    expect(component).toMatchSnapshot();
  });
});
