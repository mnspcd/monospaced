import classNames from "classnames";
import React from "react";

import { SurfaceConsumer } from "../Surface";

import "./Rule.css";

/**
 * Use `Rule` to display a horizontal rule.
 */
const Rule = () => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <hr
        className={classNames({
          Rule: true,
          [`Rule--onDarkBackground`]: surfaceBackground === "dark",
        })}
      />
    )}
  </SurfaceConsumer>
);

export default Rule;
