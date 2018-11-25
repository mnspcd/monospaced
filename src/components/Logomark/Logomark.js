import PropTypes from "prop-types";
import React from "react";

import "./Logomark.css";
import colors, { colorKeys } from "../../system/color";

const Logomark = ({
  backgroundColor,
  color,
  padding,
  secondColor,
  title,
  width,
}) => {
  return (
    <span
      className="Logomark"
      style={{ backgroundColor: colors[backgroundColor], width }}
    >
      <span className="Logomark-inner">
        <svg
          className="Logomark-svg"
          role={title && "img"}
          style={{ padding }}
          viewBox="0 0 2048 2048"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={!title || null}
          aria-label={title}
        >
          <path
            d="M485.378 1921.317h1078.004v126.796H485.378zM1562.641 253.22v1541.238H485.368V253.227H1562.64zm-153.889 1387.632V406.852H1281.94l-258.81 615.277-258.78-615.277H639.257v1234.001h128.51V705.06l3.447-3.385 251.915 604.963 253.665-604.963h3.427v939.178h128.541z"
            fill={colors[color] || "currentColor"}
          />
          {secondColor && (
            <path
              d="M767.766 1640.847h-128.51V406.846H764.35l258.78 615.283 258.8-615.283h126.822v1234h-128.54V701.67h-3.428l-253.655 604.97-251.925-604.97-3.448 3.385v935.793z"
              fill={
                typeof secondColor === "string"
                  ? colors[secondColor]
                  : colors.white
              }
            />
          )}
        </svg>
      </span>
    </span>
  );
};

Logomark.propTypes = {
  backgroundColor: PropTypes.oneOf(colorKeys),
  color: PropTypes.oneOf(colorKeys),
  padding: PropTypes.string,
  secondColor: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(colorKeys),
  ]),
  title: PropTypes.string,
  width: PropTypes.string,
};

export default Logomark;
