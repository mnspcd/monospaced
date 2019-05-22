import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "./storybook.css";

const loadStories = () => {
  const req = require.context("../src", true, /^\.(.*)\.stories\.js$/);
  const reqArray = req.keys().sort();

  reqArray.unshift(reqArray.pop());
  reqArray.forEach(filename => req(filename));
};
const styles = story => <div style={{ margin: "0" }}>{story()}</div>;

addParameters({
  options: {
    panelPosition: "right",
    sidebarAnimations: false,
    theme: {
      brandTitle: "Monospaced",
      brandUrl: "https://monospaced.com",
    },
  },
});

addDecorator(styles);
addDecorator(withKnobs);
configure(loadStories, module);
