import { text } from "@storybook/addon-knobs";
import React from "react";

import Poster from "./Poster";

export default {
  component: Poster,
  title: "Components/Poster",
};

export const basic = () => <Poster padding="9em 1em"></Poster>;

export const textContent = () => (
  <Poster padding="1.5em 1em">
    <div className="u-monospaced">
      Text <br />
      <a href="#">Link</a>
    </div>
  </Poster>
);

export const knobs = () => (
  <Poster padding={text("padding", "1.5em 1em")}>
    <div className="u-monospaced">
      Text <br />
      <a href="#">Link</a>
    </div>
  </Poster>
);

knobs.story = { parameters: { docs: { disable: true } } };
