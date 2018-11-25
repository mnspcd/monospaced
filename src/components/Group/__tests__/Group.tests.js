/* eslint-env jest */
import React from "react";
import { render } from "enzyme";

import Group from "../Group";

describe("Group component", () => {
  it("should render correctly", () => {
    const component = render(
      <Group>
        <Group.Item>children</Group.Item>
      </Group>,
    );
    expect(component).toMatchSnapshot();
  });
});
