import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import { SurfaceConsumer } from "../../../Surface";
import "./Code.css";

const Code = ({ block, children, lightMode }) => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <code
        className={classNames({
          Code: true,
          [`Code--block`]: block,
          [`Code--lightMode`]: lightMode,
          [`Code--onDarkBackground`]: surfaceBackground === "dark",
        })}
      >
        {children}
      </code>
    )}
  </SurfaceConsumer>
);

Code.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  lightMode: PropTypes.bool,
};

Code.Block = ({ children, lightMode }) => (
  <Code block lightMode={lightMode}>
    {children}
  </Code>
);

Code.Block.displayName = "Code.Block";

Code.Block.propTypes = {
  children: PropTypes.node.isRequired,
  lightMode: PropTypes.bool,
};

/* eslint-disable react/display-name, react/prop-types */

Code.Block.LightMode = ({ children }) => (
  <Code block lightMode>
    {children}
  </Code>
);

Code.Block.LightMode.displayName = "Code.Block.LightMode";

Code.Block.LightMode.propTypes = {
  children: PropTypes.node.isRequired,
};

/* eslint-enable */

export default Code;
