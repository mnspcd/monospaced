/* eslint-env jest */
import { shallow } from "enzyme";
import React from "react";

import content from "../../../../content/__mocks__";

import Post from "../";

describe("Post component", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Post content={content} route={{ path: "slug" }} />,
    );
    expect(component).toMatchSnapshot();
  });
});
