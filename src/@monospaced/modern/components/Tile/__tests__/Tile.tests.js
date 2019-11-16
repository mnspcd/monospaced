/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Tile from "../Tile";

describe("Tile component", () => {
  it("should render correctly", () => {
    const component = render(<Tile href="http://example.com">children</Tile>);
    expect(component).toMatchSnapshot();
  });
});
