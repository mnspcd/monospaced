import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Space.css";

const Space = ({ children, size }) => (
  <div
    className={classNames({
      Space: true,
      [`Space--l`]: size === "l",
      [`Space--s`]: size === "s",
      [`Space--xl`]: size === "xl",
    })}
  >
    {children}
  </div>
);

Space.sizes = ["l", "s", "xl"];

Space.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Space.sizes),
};

export default Space;
