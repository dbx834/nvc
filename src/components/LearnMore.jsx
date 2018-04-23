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
            <Link to="/writings/decathalon-work">
              <Image
                src="https://images.unsplash.com/photo-1448743133657-f67644da3008?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=405241651e3c3b181a41f515c2b34799&auto=format&fit=crop&w=900&w=900&q=80"
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Decathalon Work</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/writings/celebrations-and-gratitude">
              <Image
                src="/content-assets/covers/celebrations-and-gratitude.jpg"
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Celebrations & Gratitude</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/writings/justice-and-punishment">
              <Image
                src="https://images.unsplash.com/photo-1507184915978-447ac6ab3ecb?ixlib=rb-0.3.5&s=e1f0e60b77167b3ab7383ad81e2e3435&auto=format&fit=crop&w=900&h=900"
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>Justince & Punishment</H3>
            </Link>
          </THex>
          <THex className="hex">
            <Link to="/writings/what-does-nvc-mean-to-you">
              <Image
                src="https://images.unsplash.com/photo-1518983498539-c6e66c62f6b3?ixlib=rb-0.3.5&s=580f065422952f086541ba61e8ae5304&auto=format&fit=crop&w=900&h=900"
                rawWidth={900}
                rawHeight={900}
                style={{
                  height: "33vh",
                  width: "100%",
                  border: 0,
                  background: "#4a4a4a",
                }}
              />
              <H3 style={{ lineHeight: 1 }}>What does NVC mean to you?</H3>
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
