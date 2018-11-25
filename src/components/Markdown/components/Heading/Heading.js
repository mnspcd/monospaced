import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Heading.css";
import { colorTokens } from "../../../../system/color";

const Heading = ({ children, color, level, size }) => {
  let Element = "span";

  if (Heading.levels.includes(level)) {
    Element = `h${level}`;
  }

  return (
    <Element
      className={classNames({ Heading: true, [`Heading--${size}`]: size })}
      style={{ color: color && colorTokens[color] }}
    >
      {children}
    </Element>
  );
};

Heading.colors = ["brand-primary-dark-color"];
Heading.levels = ["1", "2", "3", "4", "5", "6"];
Heading.sizes = ["s", "m", "l", "xl", "xxl", "xxxl"];

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Heading.colors),
  level: PropTypes.oneOf(Heading.levels),
  size: PropTypes.oneOf(Heading.sizes),
};

Heading.H1 = ({ children }) => (
  <Heading level="1" size="xxxl">
    {children}
  </Heading>
);

Heading.H1.displayName = "Heading.H1";

Heading.H1.propTypes = { children: PropTypes.node.isRequired };

Heading.H2 = ({ children }) => (
  <Heading level="2" size="xxl">
    {children}
  </Heading>
);

Heading.H2.displayName = "Heading.H2";

Heading.H2.propTypes = { children: PropTypes.node.isRequired };

Heading.H3 = ({ children }) => (
  <Heading level="3" size="xl">
    {children}
  </Heading>
);

Heading.H3.displayName = "Heading.H3";

Heading.H3.propTypes = { children: PropTypes.node.isRequired };

Heading.H4 = ({ children }) => (
  <Heading level="4" size="l">
    {children}
  </Heading>
);

Heading.H4.displayName = "Heading.H4";

Heading.H4.propTypes = { children: PropTypes.node.isRequired };

Heading.H5 = ({ children }) => (
  <Heading level="5" size="m">
    {children}
  </Heading>
);

Heading.H5.displayName = "Heading.H5";

Heading.H5.propTypes = { children: PropTypes.node.isRequired };

Heading.H6 = ({ children }) => (
  <Heading level="6" size="s">
    {children}
  </Heading>
);

Heading.H6.displayName = "Heading.H6";

Heading.H6.propTypes = { children: PropTypes.node.isRequired };

export default Heading;
