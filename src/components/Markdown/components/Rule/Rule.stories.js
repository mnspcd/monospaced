import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Grid from "../../../Grid";
import Space from "../../../Space";
import Surface from "../../../Surface";
import Rule from "./Rule";

storiesOf("Components/Markdown/Rule", module).add("Component", () => (
  <Surface
    backgroundColor={select(
      "backgroundColor",
      Surface.backgroundColors,
      "white",
      "Surface",
    )}
  >
    <Grid>
      <Grid.Item colSpan="6">
        <Space />
        <Rule />
        <Space />
      </Grid.Item>
    </Grid>
  </Surface>
));
