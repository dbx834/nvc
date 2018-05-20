// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import merge from "lodash/merge";
import map from "lodash/map";
import startsWith from "lodash/startsWith";
import isUndefined from "lodash/isUndefined";
import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Elements, applyType, applyRhythm } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Container from "@bodhi-project/components/lib/Container";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/css";

import Modal from "antd/lib/modal";
import "antd/lib/modal/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../assets/logo.png";
import globalWithMediaQueries from "../helpers/globalWithMediaQueries";

import ContactForm from "../components/ContactForm";
import NewsletterForm from "../components/NewsletterForm";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Ul } = Elements;

globalWithMediaQueries(
  ".ant-popover-inner-content",
  merge({ ...applyType("ltb1ekq") }),
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
      fontWeight: "500 !important",
      color: "#b43808 !important",

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
      color: "#BA6B02",
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

    this.state = {
      modalVisible: false,
      modalRoute: null,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  /** showModal */
  showModal(e, modalRoute) {
    if (!isUndefined(e)) {
      e.preventDefault();
    }
    this.setState({
      modalVisible: true,
      modalRoute,
    });
  }

  /** hideModal */
  hideModal(e) {
    if (!isUndefined(e)) {
      e.preventDefault();
    }
    this.setState({
      modalVisible: false,
    });
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
            {map(this.props.menu, topLevel => {
              const { title, menu } = topLevel;
              return (
                <Fragment key={title}>
                  <li className="header">
                    <span>{title}</span>
                  </li>
                  {map(menu, subMenu => {
                    const subTitle = subMenu.title;
                    const popMenu = subMenu.menu;
                    const {
                      link,
                      menuPopoverLocation,
                      renderInModal,
                    } = subMenu;
                    const isOutLink = startsWith(link, "http");
                    const asModal = renderInModal === true;

                    return (
                      <Fragment key={link}>
                        {isUndefined(popMenu) && (
                          <li>
                            {isOutLink === true && (
                              <Fragment>
                                {asModal ? (
                                  <OutLink
                                    to={link}
                                    onClick={e => {
                                      this.showModal(e, link);
                                    }}
                                  >
                                    <span>{subTitle}</span>
                                  </OutLink>
                                ) : (
                                  <OutLink to={link}>
                                    <span>{subTitle}</span>
                                  </OutLink>
                                )}
                              </Fragment>
                            )}
                            {isOutLink === false && (
                              <Fragment>
                                {asModal ? (
                                  <Link
                                    to={link}
                                    onClick={e => {
                                      this.showModal(e, link);
                                    }}
                                  >
                                    <span>{subTitle}</span>
                                  </Link>
                                ) : (
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
                              </Fragment>
                            )}
                          </li>
                        )}
                        {!isUndefined(popMenu) && (
                          <li>
                            <Popover
                              placement={menuPopoverLocation}
                              content={
                                <div className="menu-tip">
                                  <ul>
                                    {map(popMenu, popMenuItem => {
                                      const itemTitle = popMenuItem.title;
                                      const itemLink = popMenuItem.link;
                                      const isItemLinkOutLink = startsWith(
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
                                                split(itemLink, "?", 1)[0]
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
                                    pathname === split(link, "?", 1)[0]
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
        <Modal
          visible={this.state.modalVisible}
          bodyStyle={{
            minWidth: "640px",
            minHeight: "480px",
            padding: 0,
          }}
          style={{
            minWidth: "640px",
            minHeight: "480px",
            top: 30,
            padding: 0,
            borderRadius: 8,
          }}
          title={null}
          closable={false}
          footer={[null, null]}
        >
          <div
            style={{
              position: "absolute",
              display: "inline-block",
              top: 10,
              right: 10,
              zIndex: 10,
            }}
          >
            <a
              href="#"
              onClick={e => {
                this.hideModal(e);
              }}
            >
              Close
            </a>
          </div>
          <div
            style={{
              minWidth: "640px",
              minHeight: "480px",
              padding: "1em",
              backgroundColor: "#f8f2e6",
            }}
          >
            {this.state.modalRoute === "/contact" && <ContactForm />}
            {this.state.modalRoute === "/newsletter" && <NewsletterForm />}
          </div>
        </Modal>
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
