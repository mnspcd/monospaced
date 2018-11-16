import React from "react";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Group from "./Group";
import Block from "../Block";

storiesOf("Components/Group", module).add("Component", () => {
  const numberOfItems = number(
    "number of items",
    4,
    {
      range: true,
      min: 1,
      max: 16,
    },
    "Story",
  );

  return (
    <Group tessellate={boolean("tessellate", false, "Group")}>
      {[...Array(numberOfItems).keys()].map(i => (
        <Group.Item key={i}>
          <Block>Item</Block>
        </Group.Item>
      ))}
    </Group>
  );
});
