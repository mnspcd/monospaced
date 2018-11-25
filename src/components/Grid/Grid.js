import PropTypes from "prop-types";
import React from "react";

import "./Grid.css";

const Grid = ({ children, rows }) => (
  <div
    className="Grid"
    style={{ gridTemplateRows: rows && `repeat(${rows}, 1fr)` }}
  >
    {children}
  </div>
);

Grid.alignments = ["center", "end", "start"];

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  rows: PropTypes.string,
};

Grid.Item = ({
  align,
  children,
  colSpan,
  colStart,
  justify,
  rowSpan,
  rowStart,
}) => (
  <div
    className="Grid-item"
    style={{
      alignSelf: align,
      gridColumnEnd: colSpan && `span ${colSpan}`,
      gridColumnStart: colStart,
      gridRowEnd: rowSpan && `span ${rowSpan}`,
      gridRowStart: rowStart,
      justifySelf: justify,
    }}
  >
    {children}
  </div>
);

Grid.Item.displayName = "Grid.Item";

Grid.Item.propTypes = {
  align: PropTypes.oneOf(Grid.alignments),
  children: PropTypes.node,
  colSpan: PropTypes.string,
  colStart: PropTypes.string,
  justify: PropTypes.oneOf(Grid.alignments),
  rowSpan: PropTypes.string,
  rowStart: PropTypes.string,
};

export default Grid;
