import PropTypes from "prop-types";
import React from "react";

import "./Blockquote.css";

const Blockquote = ({ children }) => (
  <blockquote className="Blockquote">{children}</blockquote>
);

Blockquote.propTypes = { children: PropTypes.node.isRequired };

export default Blockquote;
