// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";
import _ from "lodash";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Container, OutLink, Image } from "@bodhi-project/components";
import { Elements, applyType, applyRhythm } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../assets/logo.png";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Ul } = Elements;

globalWithMediaQueries(
  ".ant-popover-inner-content",
  _.merge({ ...applyType("ltb1ekq") }),
  true,
);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const desktopNavStyle = css({
  padding: 0,

  "& ul": {
    listStyle: "none",
    paddingLeft: 40,

    "& li": {
      fontFamily: "futura-pt, sans-serif !important",
      marginBottom: "0px !important",
    },

    "& li.header": {
      fontWeight: 700,

      "& span": {
        fontSize: "90%",
        letterSpacing: "-0.08775ex",
      },
    },

    "& li.header:not(:first-child)": {
      ...applyRhythm({ marginTop: "0.75X" }),
    },

    "& a": {
      color: "#4a4a4a",
      borderBottom: "1.625px solid transparent",
      transition: "0.125s",
      textTransform: "uppercase",
      letterSpacing: "0.14625ex",

      "& span": {
        fontSize: "66%",
      },

      "&:hover": {
        color: "#4a4a4a",
        borderBottom: "1.625px solid #4a4a4a",
      },
    },

    "& a.active": {
      color: "#B43808",
    },
  },
});
const desktopNavStyleClass = desktopNavStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
class DesktopNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { pathname } = this.props.location;

    return (
      <Container bleed block noFade className={desktopNavStyleClass}>
        <Link to="/">
          <Image
            src={logo}
            rawWidth={842}
            rawHeight={936}
            style={{
              height: 156,
              width: 140,
              border: 0,
              background: "transparent",
              marginLeft: 40,
              marginBottom: 26,
              marginTop: 26,
            }}
            loader="gradient"
          />
        </Link>
        <nav>
          <Ul>
            {_.map(this.props.menu, topLevel => {
              const { title, menu } = topLevel;
              return (
                <Fragment>
                  <li className="header" key={title}>
                    <span>{title}</span>
                  </li>
                  {_.map(menu, subMenu => {
                    const subTitle = subMenu.title;
                    const popMenu = subMenu.menu;
                    const { link, menuPopoverLocation } = subMenu;
                    const isOutLink = _.startsWith(link, "http");

                    return (
                      <Fragment>
                        {_.isUndefined(popMenu) && (
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
                                  pathname === _.split(link, "?", 1)[0]
                                    ? "active"
                                    : ""
                                }
                              >
                                <span>{subTitle}</span>
                              </Link>
                            )}
                          </li>
                        )}
                        {!_.isUndefined(popMenu) && (
                          <li key={subTitle}>
                            <Popover
                              placement={menuPopoverLocation}
                              content={
                                <div className="menu-tip">
                                  <ul>
                                    {_.map(popMenu, popMenuItem => {
                                      const itemTitle = popMenuItem.title;
                                      const itemLink = popMenuItem.link;
                                      const isItemLinkOutLink = _.startsWith(
                                        itemLink,
                                        "http",
                                      );
                                      return (
                                        <li key={itemLink}>
                                          {isItemLinkOutLink === true && (
                                            <OutLink to={itemLink}>
                                              <span>{itemTitle}</span>
                                            </OutLink>
                                          )}
                                          {isItemLinkOutLink === false && (
                                            <Link
                                              to={itemLink}
                                              className={
                                                pathname ===
                                                _.split(itemLink, "?", 1)[0]
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
                                </div>
                              }
                            >
                              {isOutLink === true && (
                                <OutLink to={link}>{subTitle}</OutLink>
                              )}
                              {isOutLink === false && (
                                <Link
                                  to={link}
                                  className={
                                    pathname === _.split(link, "?", 1)[0]
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <span>{subTitle}</span>
                                  <span style={{ fontSize: "88%" }}>
                                    &nbsp;»
                                  </span>
                                </Link>
                              )}
                            </Popover>
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
      </Container>
    );
  }
}

DesktopNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default DesktopNav;
