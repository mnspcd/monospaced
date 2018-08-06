import { Link } from "react-router";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import "./Footer.css";

const Footer = ({ copyright, links, routes }) => {
  const path = routes && routes[routes.length - 1].path;

  return (
    <div className="Footer">
      <div className="Footer-copyright">
        © {copyright} {new Date().getFullYear()}
      </div>
      {links && (
        <ul className="Footer-list">
          {links.map(link => {
            const { href, routerLink, text } = link;

            return (
              <li className="Footer-listItem" key={text}>
                {routerLink ? (
                  <Link
                    className={classNames({
                      [`Footer-link`]: true,
                      [`Footer-linkActive`]: href.replace(/\//g, "") === path,
                    })}
                    to={href}
                  >
                    {text}
                  </Link>
                ) : (
                  <a className="Footer-link" href={href}>
                    {text}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      routerLink: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }),
  ),
  routes: PropTypes.array,
};

export default Footer;
