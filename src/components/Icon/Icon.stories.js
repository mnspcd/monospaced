import React from "react";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as Icons from "react-feather";

import Grid from "../Grid";
import Space from "../Space";

import colors, { colorKeys } from "../../system/color";

const iconKeys = Object.keys(Icons).sort();

storiesOf("Components/Icon", module).add("Component", () => {
  const Icon = Icons[select("Icon", iconKeys, "Activity")];

  return (
    <>
      <Space size="s" />
      <Grid>
        <Grid.Item colSpan="1">
          <Icon
            color={colors[select("color", [""].concat(colorKeys))] || undefined}
            size={select("size", ["20", "24", "100%"], "100%") || undefined}
          />
        </Grid.Item>
      </Grid>
    </>
  );
});
