import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Mdx from "./__mocks__/markdown.mock.mdx";
import Surface from "../Surface";
import { components } from "../Markdown";

storiesOf("Components/Markdown", module).add("Sample", () => (
  <Surface
    backgroundColor={select(
      "backgroundColor",
      Surface.backgroundColors,
      "white",
      "Surface",
    )}
    padding={text("padding", "", "Surface")}
  >
    <Mdx components={components} />
  </Surface>
));
