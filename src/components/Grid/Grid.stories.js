import React from "react";
import { number, select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Grid from "./Grid";
import Block from "../Block";

storiesOf("Components/Grid", module).add("Component", () => {
  const numberOfItems = number(
    "number of items",
    6,
    {
      range: true,
      min: 1,
      max: 24,
    },
    "Story",
  );

  return (
    <Grid>
      <Grid.Item
        align={
          select("align", [""].concat(Grid.alignments), "", "Grid.Item") || null
        }
        colSpan={text("colSpan", "", "Grid.Item")}
        colStart={text("colStart", "", "Grid.Item")}
        justify={
          select("justify", [""].concat(Grid.alignments), "", "Grid.Item") ||
          null
        }
        rowSpan={text("rowSpan", "", "Grid.Item")}
        rowStart={text("rowStart", "", "Grid.Item")}
      >
        <Block>Item</Block>
      </Grid.Item>
      {[...Array(numberOfItems - 1).keys()].map(i => (
        <Grid.Item key={i}>
          <Block height="6em" />
        </Grid.Item>
      ))}
    </Grid>
  );
});
