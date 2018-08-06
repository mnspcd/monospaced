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
    })}
  >
    {children}
  </div>
);

Space.sizes = ["l", "s"];

Space.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Space.sizes),
};

export default Space;
