// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Header as SemanticHeader } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import CompositeHeader from "@bodhi-project/components/lib/CompositeHeader";
import "@bodhi-project/antrd/lib/nvc-website/modal/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import mobileLogo from "../../assets/mobileLogo.png";
import mobileBurger from "../../assets/mobileBurger.png";
import mobileCross from "../../assets/mobileCross.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const menu = [
  {
    title: "About",
    menu: [
      { title: "Joy Living Learning", link: "/" },
      { title: "L'aura Joy", link: "/laura-joy" },
    ],
  },
  {
    title: "Workshops & Facilitation",
    menu: [
      {
        title: "Nonviolent Communication",
        link: "/nonviolent-communication",
      },
      {
        title: "Restorative Circles",
        link: "/restorative-circles",
      },
      {
        title: "Facilitated Spaces",
        link: "/facilitated-spaces",
      },
    ],
  },
  {
    title: "Learn",
    menu: [
      { title: "Workshops & Events", link: "/workshops-and-events" },
      { title: "Calendar View", link: "/calendar" },
      {
        title: "Pay Fee",
        link: "/pay-fee",
        renderInModal: true,
      },
    ],
  },
  {
    title: "More",
    menu: [
      { title: "Blog", link: "/writings" },
      { title: "Gallery", link: "/gallery" },
      { title: "Newsletter", link: "/newsletter", renderInModal: true },
      { title: "Contact Us", link: "/contact-us", renderInModal: true },
      {
        title: "Donate",
        link: "/donate",
        renderInModal: true,
      },
      { title: "NVC In India", link: "/nvc-india" },
      {
        title: "Further Links",
        menuPopoverLocation: "rightBottom",
        menu: [
          {
            title: "Restorative Auroville",
            link: "https://www.restorativeauroville.org/",
          },
          {
            title: "India NVC",
            link: "https://www.indianvc.org/",
          },
          {
            title: "Nonviolent Communication & CNVC",
            link: "http://www.cnvc.org/",
          },
          {
            title: "Restorative Circles & Dominic Barter",
            link: "http://www.restorativecircles.org/",
          },
          { title: "Auroville", link: "https://www.auroville.org/" },
        ],
      },
    ],
  },
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeader = css({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 5px 0px rgba(30,30,30,0.2)",
  border: "unset",
  paddingBottom: 20,
});
const mobileHeaderClass = mobileHeader.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    return (
      <SemanticHeader>
        <ResponsiveHeader path={this.props.location}>
          <MobileHeader className={mobileHeaderClass}>
            <img
              id="logo"
              alt="logo"
              src={mobileLogo}
              style={{
                height: 45,
                width: "auto",
                marginTop: 20,
              }}
            />
            <img
              id="menu"
              alt="menu icon"
              src={mobileBurger}
              style={{
                height: 38,
                width: 38,
                top: 20,
                right: 7,
                position: "absolute",
              }}
            />
            <img
              id="cross"
              alt="close menu icon"
              src={mobileCross}
              style={{
                height: 38,
                width: 38,
                top: 44,
                right: 24,
                position: "absolute",
              }}
            />
          </MobileHeader>
          <MobileMenu>
            <MobileNav menu={menu} {...this.props} />
          </MobileMenu>
          <DesktopHeader>
            <DesktopNav menu={menu} {...this.props} />
          </DesktopHeader>
        </ResponsiveHeader>
      </SemanticHeader>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
