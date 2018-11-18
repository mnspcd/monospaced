import { Link } from "react-router";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

import Button from "../Button";
import { Heading } from "../Markdown";
import { Mail, Menu } from "react-feather";

import "./Masthead.css";

const Masthead = ({ activePath, headingLevel, links, logo }) => {
  return (
    <div className="Masthead">
      <Heading level={headingLevel}>
        <Link className="Masthead-logo" to="/">
          {logo}
        </Link>
      </Heading>
      <div className="Masthead-menu">
        <div className="Masthead-menuButton">
          {links &&
            (links.length > 1 ? (
              <Button
                icon={<Menu aria-label="Menu" role="img" size="100%" />}
                styleVariant="flat"
              />
            ) : (
              <a href={links[0].href}>
                <Button
                  icon={<Mail aria-label="Email" role="img" size="100%" />}
                  styleVariant="flat"
                />
              </a>
            ))}
        </div>
        {links && (
          <nav className="Masthead-nav">
            <ul className="Masthead-navList">
              {links.map(link => {
                const { href, routerLink, text } = link;

                return (
                  <li className="Masthead-navItem" key={text}>
                    {routerLink ? (
                      <Link
                        className={classNames({
                          [`Masthead-navLink`]: true,
                          [`Masthead-navLinkActive`]: href === activePath,
                        })}
                        to={href}
                      >
                        {text}
                      </Link>
                    ) : (
                      <a className="Masthead-navLink" href={href}>
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

Masthead.propTypes = {
  activePath: PropTypes.string,
  headingLevel: PropTypes.oneOf(Heading.levels),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      routerLink: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }),
  ),
  logo: PropTypes.element.isRequired,
};

export default Masthead;
