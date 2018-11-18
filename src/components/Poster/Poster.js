import PropTypes from "prop-types";
import React from "react";

import "./Poster.css";

const Poster = ({ children, padding }) => (
  <div className="Poster" style={{ padding }}>
    {children}
  </div>
);

Poster.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Poster;
