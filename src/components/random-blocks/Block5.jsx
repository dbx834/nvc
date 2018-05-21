// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import ContainerDimensions from "react-container-dimensions";
import ReactPlayer from "react-player";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import bookCover from "../../assets/bookCover.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const video = css({
  marginBottom: 20,
});
const videoClass = video.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Block */
const Block = props => (
  <div>
    <hr />
    <h3 className="mask-p" style={{ marginBottom: 10 }}>
      Some inspiration…
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
          src={bookCover}
          rawWidth={289}
          rawHeight={442}
          style={{
            width: "80%",
            height: "auto",
            border: 0,
            background: "transparent",
            display: "block",
            marginBottom: 10,
          }}
        />
        <OutLink to="http://banyantreebookstore.weebly.com/nonviolent-communication.html">
          Click here
        </OutLink>{" "}
        to buy in India.
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
            "If the growth of consciousness were considered as the principal
            goal of life, many difficulties would find their solution."
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
