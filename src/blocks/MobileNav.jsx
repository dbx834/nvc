// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";
import startsWith from "lodash/startsWith";
import split from "lodash/split";

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
            {map(this.props.menu, topLevel => {
              const { title, menu } = topLevel;
              return (
                <Fragment>
                  <li className="header" key={title}>
                    <span>{title}</span>
                  </li>
                  {map(menu, subMenu => {
                    const subTitle = subMenu.title;
                    const popMenu = subMenu.menu;
                    const { link, menuPopoverLocation } = subMenu;
                    const isOutLink = startsWith(link, "http");

                    return (
                      <Fragment>
                        {isUndefined(popMenu) && (
                          <li key={link}>
                            {isOutLink === true && (
                              <OutLink to={link}>
                                <span>{subTitle}</span>
                              </OutLink>
                            )}
                            {isOutLink === false && (
                              <Link
                                to={link}
                                className={
                                  pathname === split(link, "?", 1)[0]
                                    ? "active"
                                    : ""
                                }
                              >
                                <span>{subTitle}</span>
                              </Link>
                            )}
                          </li>
                        )}
                        {!isUndefined(popMenu) && (
                          <li key={subTitle}>
                            >
                            {isOutLink === true && (
                              <OutLink to={link}>{subTitle}</OutLink>
                            )}
                            {isOutLink === false && (
                              <Link
                                to={link}
                                className={
                                  pathname === split(link, "?", 1)[0]
                                    ? "active"
                                    : ""
                                }
                              >
                                <span>{subTitle}</span>
                                <span style={{ fontSize: "88%" }}>&nbsp;»</span>
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
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default MobileNav;
