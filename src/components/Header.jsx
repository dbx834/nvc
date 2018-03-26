// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { CompositeHeader } from "@bodhi-project/components";
import { Header as SemanticHeader } from "@bodhi-project/semantic-webflow";

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
        menuPopoverLocation: "rightTop",
        menu: [
          {
            title: "Workshops",
            link: "/nonviolent-communication/events?filter=workshop",
          },
          {
            title: "Practice Groups",
            link: "/nonviolent-communication/events?filter=practice-group",
          },
          { title: "Articles", link: "/writings?filter=nvc" },
        ],
      },
      {
        title: "Restorative Circles",
        link: "/restorative-circles",
        menuPopoverLocation: "rightTop",
        menu: [
          {
            title: "Workshops",
            link: "/restorative-circles/events?filter=workshop",
          },
          {
            title: "Practice Groups",
            link: "/restorative-circles/events?filter=practice-group",
          },
          { title: "Call a Circle", link: "/call-a-circle" },
          { title: "Articles", link: "/writings?filter=rc" },
        ],
      },
      { title: "Mediation", link: "/mediation" },
      { title: "Group Facilitation", link: "/group-facilitation" },
      { title: "Individual Coaching", link: "/individual-coaching" },
    ],
  },
  {
    title: "Learn",
    menu: [
      { title: "Upcoming Events", link: "/upcoming-events" },
      { title: "Featured Events", link: "/featured-events" },
    ],
  },
  {
    title: "More",
    menu: [
      { title: "Blog", link: "/writings" },
      { title: "Gallery", link: "/gallery" },
      { title: "Newsletter", link: "/newsletter" },
      { title: "Fee & Donation", link: "/fee-and-donation" },
      { title: "Contact", link: "/contact" },
      {
        title: "Further Links",
        link: "#",
        menuPopoverLocation: "rightBottom",
        menu: [
          {
            title: "Nonviolent Communication & CNVC",
            link: "http://www.cnvc.org/",
          },
          {
            title: "Restorative Circles",
            link: "http://www.restorativecircles.org/",
          },
          { title: "Auroville", link: "https://www.auroville.org/" },
          {
            title: "Restorative Auroville",
            link: "https://restorativeauroville.org/",
          },
          { title: "Sociocracy", link: "http://www.sociocracy.info/" },
          {
            title: "Internal Family Systems",
            link: "https://selfleadership.org/",
          },
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
