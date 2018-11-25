import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Surface from "./Surface";

import typography from "../../system/typography";

storiesOf("Components/Surface", module).add("Component", () => {
  return (
    <div style={{ fontFamily: `${typography["font-monospaced"]}` }}>
      <Surface
        backgroundColor={select(
          "backgroundColor",
          Surface.backgroundColors,
          "white",
        )}
      >
        Text color <br />
        <a href="#">Link color</a>
      </Surface>
    </div>
  );
});
