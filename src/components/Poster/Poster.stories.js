import React from "react";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Poster from "./Poster";

import typography from "../../system/typography";

storiesOf("Components/Poster", module).add("Component", () => {
  return (
    <div style={{ fontFamily: `${typography["font-monospaced"]}` }}>
      <Poster padding={text("padding", "1.5em 1em")}>
        Text color <br />
        <a href="#">Link color</a>
      </Poster>
    </div>
  );
});
