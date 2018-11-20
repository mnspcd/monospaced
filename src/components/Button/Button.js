import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import { PosterConsumer } from "../Poster";
import { SurfaceConsumer } from "../Surface";
import "./Button.css";

const Button = ({
  children,
  colorVariant,
  disabled,
  icon,
  minWidth,
  styleVariant,
}) => {
  return (
    <PosterConsumer>
      {poster => (
        <SurfaceConsumer>
          {surfaceBackground => (
            <button
              className={classNames({
                Button: true,
                [`Button--colorDanger`]: colorVariant === "danger",
                [`Button--styleFlat`]: styleVariant === "flat",
                [`Button--styleOutlined`]: styleVariant === "outlined",
                [`Button--withIcon`]: icon,
                [`Button--iconOnly`]: icon && !children,
                [`Button--onDarkBackground`]: surfaceBackground === "dark",
                [`Button--onPoster`]: poster,
              })}
              disabled={disabled}
              style={{ minWidth }}
            >
              {icon && <span className="Button-icon">{icon}</span>}
              {children && <span className="Button-text">{children}</span>}
            </button>
          )}
        </SurfaceConsumer>
      )}
    </PosterConsumer>
  );
};

Button.colorVariants = ["danger"];
Button.styleVariants = ["flat", "outlined"];

Button.propTypes = {
  children: PropTypes.node,
  colorVariant: PropTypes.oneOf(Button.colorVariants),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  minWidth: PropTypes.string,
  styleVariant: PropTypes.oneOf(Button.styleVariants),
};

export default Button;
