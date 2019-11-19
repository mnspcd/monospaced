/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import content from "../../../content/__mocks__";

import NotFound from "..";

describe("NotFound component", () => {
  it("should render correctly", () => {
    const { container } = render(<NotFound content={content} />);

    expect(container).toMatchSnapshot();
  });
});
