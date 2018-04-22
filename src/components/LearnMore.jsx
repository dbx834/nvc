// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Image, TetraGrid as TetraGridX } from "@bodhi-project/components";
import { Elements } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { TetraGrid } = TetraGridX;
const THex = TetraGridX.Hex;
const { H2, H3, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  "& .hex": {
    boxShadow: "none ",
    padding: "0px ",
    paddingBottom: "1vh",
    paddingRight: "1vh",

    "& a": {
      display: "block",
      height: "100%",
      width: "100%",
      borderBottom: "none",
      color: "#4a4a4a",

      "&:hover": {
        color: "#4a4a4a",
        borderBottom: "none",
      },
      "&:visited": {
        textDecoration: "none",
      },
      "&:link": {
        textDecoration: "none",
      },
      "&:active": {
        textDecoration: "none",
      },
    },

    "& div": {
      WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },

    "& h3": {
      position: "absolute",
      width: "100%",
      margin: "0px !important",
      textAlign: "center",
      background: "#f9ba59",
      color: "#4a4a4a",
      bottom: -100,
      left: 0,
      WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      paddingTop: "10px",
      paddingBottom: "10px",
      fontWeight: 400,
    },

    "@media(max-width: 768px)": {
      "& h3": {
        position: "relative",
        bottom: 0,
      },
    },

    "& div:hover": {
      "& h3": {
        bottom: 0,
      },
    },
  },
});
const pageStyleClass = pageWrapper.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** LearnMore */
class LearnMore extends React.Component {
  /** standard renderer */
  render() {
    return (
      <div className={pageStyleClass}>
        <TetraGrid>
          <THex className="hex">
            <Link to="/mediation">
              <Image
                src={""}
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Something 1</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/mediation">
              <Image
                src={""}
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Something 2</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/mediation">
              <Image
                src={""}
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Something 3</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/mediation">
              <Image
                src={""}
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Something 4</H3>
            </Link>
          </THex>
        </TetraGrid>
      </div>
    );
  }
}

LearnMore.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default LearnMore;
