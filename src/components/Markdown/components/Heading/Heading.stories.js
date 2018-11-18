import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Heading from "./Heading";

const defaultText = "Hamburgefonstiv";

storiesOf("Components/Markdown/Heading", module)
  .add("Component", () => (
    <div>
      <Heading
        color={select("color", [""].concat(Heading.colors), "") || null}
        level={select("level", [""].concat(Heading.levels), "") || null}
        size={select("size", Heading.sizes, "xl")}
      >
        {text("text", defaultText)}
      </Heading>
    </div>
  ))
  .add("Waterfall", () => (
    <div>
      {Heading.sizes
        .map(size => (
          <Heading key={size} size={size}>
            {text("text", defaultText)}
          </Heading>
        ))
        .reverse()}
    </div>
  ));