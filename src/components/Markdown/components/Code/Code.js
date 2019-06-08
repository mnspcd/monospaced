import PropTypes from "prop-types";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
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

Code.Block = ({ children, className, lightMode }) => (
  <Code block lightMode={lightMode}>
    <HighlightedChildren language={className}>{children}</HighlightedChildren>
  </Code>
);

Code.Block.displayName = "Code.Block";

Code.Block.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  lightMode: PropTypes.bool,
};

/* eslint-disable react/display-name, react/prop-types */

Code.Block.LightMode = ({ children, className }) => (
  <Code block lightMode>
    <HighlightedChildren language={className}>{children}</HighlightedChildren>
  </Code>
);

Code.Block.LightMode.displayName = "Code.Block.LightMode";

Code.Block.LightMode.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

/* eslint-enable */

const HighlightedChildren = ({ children, language }) => (
  <SyntaxHighlighter
    CodeTag="span"
    language={language ? `${language.replace(/language-/, "")}` : "text"}
    PreTag="span"
    useInlineStyles={false}
  >
    {children}
  </SyntaxHighlighter>
);

HighlightedChildren.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string,
};

export default Code;
