/* eslint-env jest */
import { render } from "enzyme";
import React from "react";

import Table from "../Table";

describe("Table component", () => {
  it("should render correctly", () => {
    const component = render(<Table>children</Table>);
    expect(component).toMatchSnapshot();
  });
});
