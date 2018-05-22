// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import needsAndFeelingCards from "../../assets/needsAndFeelingCards.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Block */
const Block = props => (
  <div>
    <hr />
    <h3 className="mask-p" style={{ marginBottom: 10 }}>
      Some Inspiration…
    </h3>
    <div
      style={{
        display: "block",
        marginBottom: 30,
      }}
    >
      <div
        className="mask-p"
        style={{
          marginBottom: 30,
        }}
      >
        <Image
          src={needsAndFeelingCards}
          rawWidth={600}
          rawHeight={448}
          style={{
            width: "100%",
            height: "auto",
            border: 0,
            background: "transparent",
            display: "block",
            marginBottom: 10,
          }}
        />
        <Link to="/contact">Contact us</Link> to get your set of Feelings &
        Needs Cards.
      </div>
      <hr />
      <p
        style={{
          fontFamily: "futura-pt, sans-serif",
          fontWeight: 200,
          marginBottom: 30,
        }}
      >
        <span style={{ fontSize: "125%" }}>
          <i>
            "For each problem there is a solution that can give satisfaction to
            everybody; but for finding this ideal solution each one must want it
            instead of meeting the others with the will to enforce one’s own
            preference. Enlarge your consciousness and aspire for the
            satisfaction of all."
          </i>
          <br />
          ~ <strong>The Mother</strong>
        </span>
      </p>
    </div>
  </div>
);

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Block;
