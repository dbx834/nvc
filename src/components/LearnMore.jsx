// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import TetraGridX from "@bodhi-project/components/lib/TetraGrid";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { TetraGrid } = TetraGridX;
const THex = TetraGridX.Hex;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const hexStyle = css({
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

  "& h4": {
    position: "absolute",
    width: "96%",
    margin: "0px 2% !important",
    textAlign: "center",
    background: "rgba(248, 242, 230, 0.8)",
    color: "#4a4a4a !important",
    bottom: 10,
    left: 0,
    padding: 10,
    fontWeight: "500 !important",

    "& span": {
      fontSize: "90%",
    },
  },
});
const hexClass = hexStyle.toString();

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
    const { data } = this.props;

    return (
      <Fragment>
        <h3>Further Links…</h3>
        <TetraGrid>
          {map(data, ({ linkTo, title, image }, index) => {
            return (
              <THex className={hexClass} key={`${linkTo}-${index}`}>
                <Link to={linkTo}>
                  <Image
                    src={image}
                    rawWidth={1440}
                    rawHeight={900}
                    style={{
                      height: "auto",
                      width: "100%",
                      border: 0,
                      background: "#4a4a4a",
                    }}
                  />
                  <h4 style={{ lineHeight: 1 }}>
                    <span>{title}</span>
                  </h4>
                </Link>
              </THex>
            );
          })}
        </TetraGrid>
      </Fragment>
    );
  }
}

LearnMore.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default LearnMore;
