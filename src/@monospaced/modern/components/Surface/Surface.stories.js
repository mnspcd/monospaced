import { select } from "@storybook/addon-knobs";
import React from "react";

import Surface from "./Surface";

export default {
  component: Surface,
  title: "Components/Surface",
};

export const basic = () => (
  <Surface backgroundColor="grey-light">
    <div className="u-monospaced" style={{ padding: "1em" }}>
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

export const white = () => (
  <Surface backgroundColor="white">
    <div className="u-monospaced">
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

export const greyLight = () => (
  <Surface backgroundColor="grey-light">
    <div className="u-monospaced" style={{ padding: "1em" }}>
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

export const greyDark = () => (
  <Surface backgroundColor="grey-dark">
    <div className="u-monospaced" style={{ padding: "1em" }}>
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

export const black = () => (
  <Surface backgroundColor="black">
    <div className="u-monospaced" style={{ padding: "1em" }}>
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

export const knobs = () => (
  <Surface
    backgroundColor={select(
      "backgroundColor",
      Surface.backgroundColors,
      "white",
    )}
  >
    <div className="u-monospaced">
      Text <br />
      <a href="#">Link</a>
    </div>
  </Surface>
);

knobs.story = { parameters: { docs: { disable: true } } };
