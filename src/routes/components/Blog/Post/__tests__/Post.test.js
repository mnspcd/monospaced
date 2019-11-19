/* eslint-env jest */
import { render } from "@testing-library/react";
import React from "react";

import content from "../../../../content/__mocks__";

import Post from "..";

describe("Post component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Post content={content} route={{ path: "slug" }} />,
    );

    expect(container).toMatchSnapshot();
  });
});
