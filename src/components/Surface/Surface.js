import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Surface.css";
import { backgroundColors } from "../../system/color";

const { Consumer, Provider } = React.createContext();

const Surface = ({ backgroundColor, children }) => {
  const surfaceBackground =
    backgroundColor.endsWith("dark") || backgroundColor === "black"
      ? "dark"
      : backgroundColor.replace("mnspcd-color-", "");

  return (
    <Provider value={surfaceBackground}>
      <div
        className={classNames({
          Surface: true,
          [`Surface--backgroundDark`]: surfaceBackground === "dark",
        })}
        style={{
          backgroundColor: backgroundColors[backgroundColor],
        }}
      >
        {children}
      </div>
    </Provider>
  );
};

Surface.backgroundColors = Object.keys(backgroundColors);

Surface.defaultProps = { backgroundColor: "white" };

Surface.propTypes = {
  backgroundColor: PropTypes.oneOf(Surface.backgroundColors),
  children: PropTypes.node.isRequired,
};

export default Surface;
export { Consumer as SurfaceConsumer };
