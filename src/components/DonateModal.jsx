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
import { Elements, applyRhythm } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Tooltip from "antd/lib/tooltip";
import "antd/lib/tooltip/style/css";

import Button from "antd/lib/button";
import "antd/lib/button/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import domestic from "../assets/domestic.png";
import international from "../assets/international.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageWrapper = css({
  "& .ant-btn-primary": {
    fontWeight: 700,
    fontStyle: "italic",
    borderRadius: 0,
    backgroundColor: "#FFFFFF",
    borderColor: "#B43808",
    color: "#B43808 !important",
    height: "auto",
    transition: "all 200ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",

    "& a": {
      color: "#b43808 !important",
      borderBottom: "unset",

      "&:hover": {
        color: "#b43808 !important",
        borderBottom: "unset",
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

    "&:hover": {
      backgroundColor: "#B43808 !important",
      color: "#FFFFFF !important",
      borderColor: "transparent",
      transform: "scale(1.1)",

      "& a": {
        color: "#ffffff !important",
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
        <H1>Donate</H1>
        <Paragraph>
          If you’d like to make a donation to Joy Living Learning, you may do so
          below. This will link directly to the Auroville Foundation payment
          gateway page, and you will be able to receive a tax exemption.
        </Paragraph>
        <div className="mask-p">
          <Button type="primary" style={{ marginTop: 10, marginBottom: 30 }}>
            <OutLink to="https://www.auroville.com/donations/">
              Donate Now
            </OutLink>
          </Button>
        </div>
        <Paragraph>
          Please email{" "}
          <OutLink to="mailto:joylivinglearning@gmail.com">
            joylivinglearning@gmail.com
          </OutLink>{" "}
          to let us know that you have sent a donation, so that we can track it.
        </Paragraph>
        <Paragraph>
          Joy Living Learning is a Unit under the Auroville Foundation, which is
          a Charitable Trust under the Ministry of Human Resources (Indian
          Government). Your donation will support Joy Living Learning in its
          mission to share the principles of applied nonviolence in different
          communities and sectors, such as education, governance, and the
          corporate world.
        </Paragraph>
        <Paragraph>
          If you would like more detailed information about our projects,{" "}
          <Link to="/contact-us">contact us</Link>.
        </Paragraph>
      </div>
    );
  }
}

LearnMore.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default LearnMore;
