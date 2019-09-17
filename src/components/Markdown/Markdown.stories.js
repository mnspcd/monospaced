import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Mdx from "./__mocks__/markdown.mock.mdx";
import Grid from "../Grid";
import Space from "../Space";
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
    <Grid>
      <Grid.Item colSpan="4">
        <Space />
        <MDXProvider components={components}>
          <Mdx />
        </MDXProvider>
      </Grid.Item>
    </Grid>
  </Surface>
));
