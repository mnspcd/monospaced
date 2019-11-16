import PropTypes from "prop-types";
import React from "react";

import "./Grid.css";

/**
 * Use `Grid` to layout content in a 12-column grid.
 */
const Grid = ({ children, padding = "0 1em" }) => (
  <div className="Grid" style={{ padding }}>
    {children}
  </div>
);

Grid.alignments = ["center", "end", "start"];

Grid.propTypes = {
  /**
   * Grid.Item components to display in the Grid.
   */
  children: PropTypes.node.isRequired,

  /**
   * A valid CSS padding value for the Grid.
   */
  padding: PropTypes.string,
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
