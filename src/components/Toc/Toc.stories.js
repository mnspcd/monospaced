import React from "react";
import { number, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Toc from "./Toc";

storiesOf("Components/Toc", module).add("Component", () => {
  const numberOfItems = number(
    "number of items",
    4,
    {
      range: true,
      min: 1,
      max: 20,
    },
    "Story",
  );

  return (
    <Toc>
      {[...Array(numberOfItems).keys()].map(i => (
        <Toc.Item
          date={`${text("date", "2018-06-", "Component")}${i + 11}`}
          key={`item-${i + 1}`}
          title={`${text("title", "Item", "Component")}-${i + 1}`}
        />
      ))}
    </Toc>
  );
});
