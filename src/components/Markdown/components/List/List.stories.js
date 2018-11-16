import React from "react";
import { boolean, number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import List from "./List";

storiesOf("Components/Markdown/List", module).add("Component", () => {
  const numberOfItems = number(
    "number of items",
    3,
    {
      range: true,
      min: 1,
      max: 99,
    },
    "Story",
  );
  const ordered = boolean("ordered", false, "List");
  const itemText = text(
    "item text",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "List",
  );

  return (
    <List ordered={ordered}>
      {[...Array(numberOfItems).keys()].map(i => (
        <li key={i}>{itemText}</li>
      ))}
    </List>
  );
});
