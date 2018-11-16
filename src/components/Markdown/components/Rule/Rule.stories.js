import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

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
    padding={text("padding", "1em", "Surface")}
  >
    <Rule />
  </Surface>
));
