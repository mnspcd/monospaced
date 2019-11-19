/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import content from "../../../content/__mocks__";

import Legal from "..";

describe("Legal component", () => {
  it("should render correctly", () => {
    const { container } = render(<Legal content={content} />);

    expect(container).toMatchSnapshot();
  });
});
