/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Table from "../Table";

describe("Table component", () => {
  it("should render correctly", () => {
    const component = render(<Table>children</Table>);
    expect(component).toMatchSnapshot();
  });
});
