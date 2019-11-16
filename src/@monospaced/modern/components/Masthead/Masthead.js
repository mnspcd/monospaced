import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Mail, Menu } from "react-feather";
import { Link } from "react-router";

import Button from "../Button";
import Heading from "../Heading";
import { PosterConsumer } from "../Poster";

import "./Masthead.css";

/**
 * Use `Masthead` to display a logo and navigation links at the top of a page.
 */
const Masthead = ({
  activePath = null,
  headingLevel = null,
  links = null,
  logo,
}) => {
  return (
    <PosterConsumer>
      {poster => (
        <div
          className={classNames({
            Masthead: true,
            [`Masthead--onPoster`]: poster,
          })}
        >
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
      )}
    </PosterConsumer>
  );
};

Masthead.propTypes = {
  /**
   * Path of the current URL.
   */
  activePath: PropTypes.string,

  /**
   * HTML section heading level for the Masthead logo. If not provided will
   * render in a span.
   */
  headingLevel: PropTypes.oneOf(Heading.levels),

  /**
   * Navigation links to display in the Masthead.
   */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      routerLink: PropTypes.bool,
      text: PropTypes.string.isRequired,
    }),
  ),

  /**
   * Logo to display in the Masthead, usually a Logotype component.
   */
  logo: PropTypes.element.isRequired,
};

export default Masthead;
