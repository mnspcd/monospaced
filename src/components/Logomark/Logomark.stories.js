import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Logomark from "./Logomark";
import { colorKeys } from "../../system/color";

const selectColor = [""].concat(colorKeys);
const selectSecondColor = ["", "true"].concat(colorKeys);

storiesOf("Components/Logomark", module).add("Component", () => {
  return (
    <Logomark
      backgroundColor={select("backgroundColor", selectColor) || null}
      color={select("color", selectColor) || null}
      padding={text("padding", "")}
      secondColor={
        (select("secondColor", selectSecondColor) === "true"
          ? true
          : select("secondColor", selectSecondColor)) || null
      }
      title={text("title", "")}
      width={text("width", "6em")}
    />
  );
});
