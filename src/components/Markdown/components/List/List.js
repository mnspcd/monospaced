import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./List.css";

const List = ({ children, ordered }) => {
  let Element = "ul";

  if (ordered) {
    Element = "ol";
  }

  return (
    <Element className={classNames({ List: true, [`List--ordered`]: ordered })}>
      {children}
    </Element>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  ordered: PropTypes.bool,
};

List.Ordered = ({ children }) => <List ordered>{children}</List>;

List.Ordered.displayName = "List.Ordered";

List.Ordered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default List;
