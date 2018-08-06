import React from "react";
import { render } from "enzyme";

import Surface from "../Surface";

describe("Surface component", () => {
  it("should render correctly", () => {
    const component = render(<Surface>children</Surface>);
    expect(component).toMatchSnapshot();
  });

  it("should render dark background correctly", () => {
    const component = render(
      <Surface backgroundColor="grey-dark">children</Surface>,
    );
    expect(component).toMatchSnapshot();
  });

  it("should render padding correctly", () => {
    const component = render(<Surface padding="1em">children</Surface>);
    expect(component).toMatchSnapshot();
  });
});
