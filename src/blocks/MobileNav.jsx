// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Image, OutLink } from "@bodhi-project/components";
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import mobileLogo from "../assets/mobileLogo.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Ul } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const mobileNavStyles = css({
  height: "inherit",
  backgroundImage: "linear-gradient(to top, #dfe9f3 0%, white 100%)",
  padding: "0em",
});
const mobileNavStylesClass = mobileNavStyles.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** MobileNav */
class MobileNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { pathname } = this.props.location;

    return (
      <div className={mobileNavStylesClass}>
        <Link
          to="/"
          style={{
            display: "block",
            boxShadow: "0px 3px 5px 0px rgba(30,30,30,0.2)",
          }}
        >
          <Image
            src={mobileLogo}
            style={{
              height: 45,
              width: "auto",
              display: "block",
              border: "none",
              background: "transparent",
              marginTop: 7,
            }}
          />
        </Link>
        <nav style={{ marginTop: 20 }}>
          <Ul>
            {_.map(this.props.menu, topLevel => {
              const { title, menu } = topLevel;
              return (
                <Fragment>
                  <li className="mob-header">
                    <span>{title}</span>
                  </li>
                  {_.map(menu, subMenu => {
                    const subTitle = subMenu.title;
                    const popMenu = subMenu.menu;
                    const { link } = subMenu;
                    const isOutLink = _.startsWith(link, "http");
                    return (
                      <Fragment>
                        {_.isUndefined(popMenu) && (
                          <li>
                            {isOutLink === true && (
                              <OutLink to={link}>
                                <span>{subTitle}</span>
                              </OutLink>
                            )}
                            {isOutLink === false && (
                              <Link
                                to={link}
                                className={pathname === link ? "active" : ""}
                              >
                                <span>{subTitle}</span>
                              </Link>
                            )}
                          </li>
                        )}
                        {!_.isUndefined(popMenu) && (
                          <li>
                            {isOutLink === true && (
                              <OutLink to={link}>{subTitle}</OutLink>
                            )}
                            {isOutLink === false && (
                              <Link
                                to={link}
                                className={pathname === link ? "active" : ""}
                              >
                                <span>{subTitle}&nbsp;⁜</span>
                                <ul>
                                  {_.map(popMenu, popMenuItem => {
                                    const itemTitle = popMenuItem.title;
                                    const itemLink = popMenuItem.link;
                                    const isItemLinkOutLink = _.startsWith(
                                      itemLink,
                                      "http",
                                    );
                                    return (
                                      <li>
                                        {isOutLink === true && (
                                          <OutLink to={isItemLinkOutLink}>
                                            <span>{itemTitle}</span>
                                          </OutLink>
                                        )}
                                        {isOutLink === false && (
                                          <Link
                                            to={itemLink}
                                            className={
                                              pathname === itemLink
                                                ? "active"
                                                : ""
                                            }
                                          >
                                            <span>{itemTitle}</span>
                                          </Link>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              </Link>
                            )}
                          </li>
                        )}
                      </Fragment>
                    );
                  })}
                </Fragment>
              );
            })}
          </Ul>
        </nav>
      </div>
    );
  }
}

MobileNav.propTypes = {
  menu: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default MobileNav;
