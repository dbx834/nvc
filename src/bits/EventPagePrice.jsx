// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";
import _ from "lodash";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from "gatsby-link";
import { Elements } from "@bodhi-project/typography";
import { OutLink } from "@bodhi-project/components";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, H2, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const bitStyle = css({});
const bitStyleClass = bitStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Price */
class Price extends React.Component {
  /** standard renderer */
  render() {
    const { cost } = this.props.frontmatter;
    let costDisplay = cost;
    let isRupee = false;
    let isDollar = false;
    let amount = null;

    if (_.isString(cost)) {
      costDisplay = _.capitalize(cost);
    }

    if (_.startsWith(cost, "₹")) {
      isRupee = true;
      amount = _.trim(_.replace(cost, "₹", ""));
    }

    if (_.startsWith(cost, "$")) {
      isRupee = true;
      amount = _.trim(_.replace(cost, "$", ""));
    }

    return (
      <div className={bitStyleClass}>
        <H1 mask="h4">Price</H1>
        <Paragraph>
          {cost !== "variable" && cost !== "free" && <i>{cost}</i>}
          {cost === "variable" && (
            <Fragment>
              <i>{costDisplay}</i>
              <br />
              <br />
              <span>
                The cost of this event has not been set yet. Please register
                below and wait for more details, we will send them to you
                through email. Thanks!
              </span>
            </Fragment>
          )}
          {isRupee === true && (
            <Fragment>
              <br />
              <br />
              PS: To know the dollar equivalent{" "}
              <OutLink
                to={`http://xe.com/currencyconverter/convert/?Amount=${amount}&From=INR&To=USD`}
              >
                click here
              </OutLink>.
            </Fragment>
          )}
        </Paragraph>
      </div>
    );
  }
}

Price.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default Price;