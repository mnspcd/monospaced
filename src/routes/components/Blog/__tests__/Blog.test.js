/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import content from "../../../content/__mocks__";

import Blog from "..";

describe("Blog component", () => {
  it("should render correctly", () => {
    const { container } = render(<Blog content={content} />);

    expect(container).toMatchSnapshot();
  });
});
