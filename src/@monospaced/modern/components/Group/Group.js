import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import "./Group.css";

/**
 * Use `Group` to layout content in flexible rows.
 */
const Group = ({ children, tessellate = false }) => (
  <div
    className={classNames({
      Group: true,
      [`Group--tessellate`]: tessellate,
    })}
  >
    <div className="Group-inner">{children}</div>
  </div>
);

Group.propTypes = {
  /**
   * Group.Item components to display in the Group.
   */
  children: PropTypes.node.isRequired,

  /**
   * Should the Group.Items fill their container?
   */
  tessellate: PropTypes.bool,
};

Group.Item = ({ children }) => (
  <div className="Group-item">
    <div className="Group-itemInner">{children}</div>
  </div>
);

Group.Item.displayName = "Group.Item";

Group.Item.propTypes = { children: PropTypes.node.isRequired };

export default Group;
