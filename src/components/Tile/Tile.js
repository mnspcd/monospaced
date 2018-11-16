import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import { SurfaceConsumer } from "../Surface";
import "./Tile.css";

const Tile = ({ children, href, width }) => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <a
        className={classNames({
          Tile: true,
          [`Tile--onDarkBackground`]: surfaceBackground === "dark",
        })}
        href={href}
        style={{ width }}
      >
        {children}
      </a>
    )}
  </SurfaceConsumer>
);

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  width: PropTypes.string,
};

export default Tile;
