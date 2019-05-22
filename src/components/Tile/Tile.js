import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import { SurfaceConsumer } from "../Surface";
import "./Tile.css";

const Tile = ({ children, href, label, width }) => (
  <SurfaceConsumer>
    {surfaceBackground => (
      <a
        aria-label={label}
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
  label: PropTypes.string,
  width: PropTypes.string,
};

export default Tile;
