import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import { SurfaceConsumer } from "../../../Surface";
import "./Table.css";

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
  children: PropTypes.node.isRequired,
};

export default Table;
