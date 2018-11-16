import { Link } from "react-router";
import PropTypes from "prop-types";
import React from "react";

import "./Toc.css";

const Toc = ({ children }) => <ol className="Toc">{children}</ol>;

Toc.propTypes = {
  children: PropTypes.node.isRequired,
};

Toc.Item = ({ date, slug, title }) => {
  const LinkElement = slug ? Link : "a";

  return (
    <li className="Toc-item">
      <LinkElement
        className="Toc-itemLink"
        href={!slug ? "#" : undefined}
        to={slug && `/${slug}/`}
      >
        <span className="Toc-itemTitle">{title}</span>
        {date && <span className="Toc-itemDate">{date}</span>}
      </LinkElement>
    </li>
  );
};

Toc.Item.propTypes = {
  date: PropTypes.string,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Toc;
