/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Tile from "../Tile";

describe("Tile component", () => {
  it("should render correctly", () => {
    const component = render(<Tile>children</Tile>);
    expect(component).toMatchSnapshot();
  });
});
