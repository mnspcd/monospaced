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

Code.Block = ({ children, lightMode }) => (
  <Code block lightMode={lightMode}>
    {children}
  </Code>
);

Code.Block.LightMode = ({ children }) => (
  <Code block lightMode>
    {children}
  </Code>
);

Code.propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node.isRequired,
  lightMode: PropTypes.bool,
};

export default Code;
