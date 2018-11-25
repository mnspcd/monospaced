/* eslint-env jest */
import React from "react";
import { shallow } from "enzyme";

import content from "../../../__mocks__/content";
import Post from "../Post";

describe("Post component", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Post content={content} route={{ path: "slug" }} />,
    );
    expect(component).toMatchSnapshot();
  });
});
