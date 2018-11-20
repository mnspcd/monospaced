import PropTypes from "prop-types";
import React from "react";

import "./Poster.css";

const { Consumer, Provider } = React.createContext();

const Poster = ({ children, padding }) => (
  <Provider value={true}>
    <div className="Poster" style={{ padding }}>
      {children}
    </div>
  </Provider>
);

Poster.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

export default Poster;
export { Consumer as PosterConsumer };
