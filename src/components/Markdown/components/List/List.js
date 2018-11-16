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

List.Ordered = ({ children }) => <List ordered>{children}</List>;

List.propTypes = {
  children: PropTypes.node.isRequired,
  ordered: PropTypes.bool,
};

export default List;
