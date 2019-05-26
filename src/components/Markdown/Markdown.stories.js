import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { select } from "@storybook/addon-knobs";
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
  >
    <MDXProvider components={components}>
      <Mdx />
    </MDXProvider>
  </Surface>
));
