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
  "& hr": {
    border: "none",
    borderTop: "3px solid #B43808",
    marginBottom: 20,
  },

  "& .constrain": {
    "@media(min-width: 768px)": {
      ...applyRhythm({ maxWidth: "27X" }),
    },
  },
  "& .hover": {
    borderBottom: "1.625px solid transparent",

    "&:hover": {
      color: "#6D00FF",
      borderBottom: "1.625px solid #6D00FF",
    },
  },

  "& .ant-btn-primary": {
    backgroundColor: "#b43808",
    borderColor: "#b43808",

    "&:hover": {
      backgroundColor: "#ED784A",
      borderColor: "#ED784A",
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
        <div className="constrain">
          <H1>Fee Payment</H1>
          <Paragraph>
            You may pay your fees here, or directly on the event page you’re
            registering for.
            <br />
            <br />
            Select the Domestic option for Indian bank/credit cards, or the
            International option for foreign bank/credit cards.
          </Paragraph>
          <div className="mask-p">
            <OutLink
              to="https://www.payumoney.com/paybypayumoney/#/767B47CF78C16C75195046663CFE75CD"
              style={{ marginRight: 17 }}
            >
              <Tooltip title="Indian Card">
                <div style={{ display: "inline-block" }}>
                  <Image
                    src={domestic}
                    rawHeight={450}
                    rawWidth={450}
                    className="icon"
                    style={{
                      height: 65,
                      width: 65,
                      display: "inline-block",
                      background: "transparent",
                      border: "unset",
                    }}
                  />
                </div>
              </Tooltip>
            </OutLink>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              style={{ display: "inline-block" }}
              className="hover"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="WFXM5RNDGBXL4"
              />
              <Tooltip title="International Card">
                <input
                  type="image"
                  src={international}
                  border="0"
                  name="submit"
                  alt="PayPal – The safer, easier way to pay online!"
                  style={{
                    height: 65,
                    width: 65,
                  }}
                />
              </Tooltip>
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <hr />
          <H1>Donation</H1>
          <Paragraph>
            If you’d like to make a donation to Joy Living Learning, you may do
            so below. This will link directly to the Auroville Foundation
            payment gateway page, and you will be able to receive a tax
            exemption.
          </Paragraph>
          <Button type="primary" style={{ marginBottom: 30 }}>
            <OutLink to="https://www.auroville.com/donations/">
              Donate Now
            </OutLink>
          </Button>
          <Paragraph>
            Please email{" "}
            <OutLink to="mailto:joylivinglearning@gmail.com">
              joylivinglearning@gmail.com
            </OutLink>{" "}
            to let us know that you have sent a donation, so that we can track
            it.
          </Paragraph>
          <Paragraph>
            Joy Living Learning is a Unit under the Auroville Foundation, which
            is a Charitable Trust under the Ministry of Human Resources (Indian
            Government). Your donation will support Joy Living Learning in its
            mission to share the principles of applied nonviolence in different
            communities and sectors, such as education, governance, and the
            corporate world.
          </Paragraph>
          <Paragraph>
            If you would like more detailed information about our projects,{" "}
            <Link to="/contact">contact us</Link>.
          </Paragraph>
        </div>
      </div>
    );
  }
}

LearnMore.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default LearnMore;
