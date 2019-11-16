import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { SurfaceConsumer } from "../Surface";

import "./Table.css";

/**
 * Use `Table` to display tabular data.
 */
const Table = ({ children }) => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <table
        className={classNames({
          Table: true,
          [`Table--onDarkBackground`]: surfaceBackground === "dark",
          [`Table--onLightBlueBackground`]: surfaceBackground === "blue-light",
        })}
      >
        {children}
      </table>
    )}
  </SurfaceConsumer>
);

Table.propTypes = {
  /**
   * Permitted HTML table content to display in the Table.
   */
  children: PropTypes.node.isRequired,
};

export default Table;
