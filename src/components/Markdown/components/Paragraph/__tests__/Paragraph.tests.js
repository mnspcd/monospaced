import React from "react";
import { render } from "enzyme";

import Paragraph from "../Paragraph";

describe("Paragraph component", () => {
  it("should render correctly", () => {
    const component = render(<Paragraph>children</Paragraph>);
    expect(component).toMatchSnapshot();
  });
});
