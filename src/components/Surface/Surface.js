import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Surface.css";
import { backgroundColors } from "../../system/color";

const { Consumer, Provider } = React.createContext();

const Surface = ({ backgroundColor, children, graphPaper, padding }) => {
  const surfaceBackground =
    backgroundColor.endsWith("dark") || backgroundColor === "black"
      ? "dark"
      : backgroundColor.replace("mnspcd-color-", "");

  return (
    <Provider value={surfaceBackground}>
      <div
        className={classNames({
          Surface: true,
          [`Surface--backgroundLightBlue`]: surfaceBackground === "blue-light",
          [`Surface--backgroundDark`]: surfaceBackground === "dark",
          [`Surface--graphPaper`]: graphPaper,
        })}
        style={{
          backgroundColor: backgroundColors[backgroundColor],
          padding,
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
  graphPaper: PropTypes.bool,
  padding: PropTypes.string,
};

export default Surface;
export { Consumer as SurfaceConsumer };
