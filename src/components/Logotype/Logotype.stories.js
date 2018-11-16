import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Logotype from "./Logotype";
import { colorKeys } from "../../system/color";

storiesOf("Components/Logotype", module).add("Component", () => (
  <Logotype
    color={select("color", [""].concat(colorKeys)) || null}
    height={text("height", "3em")}
    width={text("width", "")}
  />
));
