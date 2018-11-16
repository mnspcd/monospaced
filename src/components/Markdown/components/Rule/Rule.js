import React from "react";
import classNames from "classnames";

import { SurfaceConsumer } from "../../../Surface";
import "./Rule.css";

const Rule = () => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <hr
        className={classNames({
          Rule: true,
          [`Rule--onDarkBackground`]: surfaceBackground === "dark",
          [`Rule--onLightBlueBackground`]: surfaceBackground === "blue-light",
        })}
      />
    )}
  </SurfaceConsumer>
);

export default Rule;
