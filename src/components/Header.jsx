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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import mobileLogo from "../assets/mobileLogo.png";
import mobileBurger from "../assets/mobileBurger.png";
import mobileCross from "../assets/mobileCross.png";
import MobileNav from "../blocks/MobileNav";
import DesktopNav from "../blocks/DesktopNav";

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
    menu: [{ title: "Upcoming Events", link: "/upcoming-events?filter=all" }],
  },
  {
    title: "More",
    menu: [
      { title: "Blog", link: "/writings" },
      { title: "Gallery", link: "/gallery" },
      { title: "Newsletter", link: "/newsletter", renderInModal: true },
      {
        title: "Fee & Donation",
        link: "/fee-and-donation",
        renderInModal: true,
      },
      { title: "Contact", link: "/contact", renderInModal: true },
      {
        title: "Further Links",
        link: "/#",
        menuPopoverLocation: "right",
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
            title: "Restorative Circles",
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
              style={{ height: 45, width: 45, top: 18, right: 13 }}
            />
            <img
              id="cross"
              alt="close menu icon"
              src={mobileCross}
              style={{ height: 37, width: 37 }}
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
