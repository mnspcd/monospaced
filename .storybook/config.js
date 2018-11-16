import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";
import "./storybook.css";

const loadStories = () => {
  const req = require.context("../src", true, /^\.(.*)\.stories\.js$/);
  const reqArray = req.keys().sort();

  reqArray.unshift(reqArray.pop());
  reqArray.forEach(filename => req(filename));
};
const styles = story => <div style={{ margin: "0" }}>{story()}</div>;

setOptions({
  name: "Monospaced",
  url: "https://monospaced.com",
  addonPanelInRight: true,
  sidebarAnimations: false,
});

addDecorator(styles);
addDecorator(withKnobs);
configure(loadStories, module);
