import React from "react";
import { render } from "enzyme";

import Head from "../Head";

jest.mock("../../../../../package.json", () => ({ version: "0.0.0" }));

describe("Head component", () => {
  it("should render correctly", () => {
    const component = render(<Head />);
    expect(component).toMatchSnapshot();
  });
});
