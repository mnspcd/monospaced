import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Group from "../Group/Group";

import Tile from "./Tile";

const icons = require("../../assets/clients");

storiesOf("Components/Tile", module)
  .add("Component", () => {
    const href = text("href", "https://example.com");
    const Icon = icons[select("image", Object.keys(icons), "BladudFlies")];

    return (
      <Tile
        href={href}
        label={text("label", "Label")}
        width={text("width", "8.5em")}
      >
        <Icon width="100%" />
      </Tile>
    );
  })
  .add("Tessellation", () => {
    return (
      <Group tessellate>
        {Object.keys(icons).map(key => {
          const Icon = icons[key];

          return (
            <Group.Item key={key}>
              <Tile
                href={text("href", "https://example.com")}
                label={text("label", "Label")}
              >
                <Icon width="100%" />
              </Tile>
            </Group.Item>
          );
        })}
      </Group>
    );
  });
