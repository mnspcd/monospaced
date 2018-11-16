import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Space from "./Space";
import Block from "../Block";

storiesOf("Components/Space", module).add("Component", () => {
  return (
    <React.Fragment>
      <Space size={select("size", [""].concat(Space.sizes)) || null}>
        <Block>Component</Block>
      </Space>
      <Block>Component</Block>
    </React.Fragment>
  );
});
