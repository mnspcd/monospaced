import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Group.css";

const Group = ({ children, tessellate }) => (
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
  children: PropTypes.node.isRequired,
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
