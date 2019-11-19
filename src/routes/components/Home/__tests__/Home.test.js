/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import content from "../../../content/__mocks__";

import Home from "..";

describe("Home component", () => {
  it("should render correctly", () => {
    const { container } = render(<Home content={content} />);

    expect(container).toMatchSnapshot();
  });
});
