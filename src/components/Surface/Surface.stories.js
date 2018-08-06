import React from "react";
import { boolean, select, text } from "@storybook/addon-knobs";
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
        graphPaper={boolean("graphPaper", false)}
        padding={text("padding", "1.5em 1em 1.55em")}
      >
        Text color <br />
        <a href="#">Link color</a>
      </Surface>
    </div>
  );
});
