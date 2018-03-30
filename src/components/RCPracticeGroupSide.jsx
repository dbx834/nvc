// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
// import PropTypes from 'prop-types';
// import _ from "lodash";
// import moment from "moment";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import { Form, Select, Input, Button } from "antd";
import { Elements } from "@bodhi-project/typography";
import { Image } from "@bodhi-project/components";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { H1, Paragraph } = Elements;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
const style = css({
  borderBottom: "3px solid #4a4a4a",
  paddingBottom: "2em",

  "& h1": {
    textTransform: "uppercase",
    fontStyle: "italic",
    borderTop: "3px solid #4a4a4a",

    "& span": {
      fontSize: "90%",
    },
  },
});
const styleClass = style.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** RCPracticeGroupSide */
class RCPracticeGroupSide extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    return (
      <div className={styleClass}>
        <H1 mask="h4">
          <span>Donate</span>
        </H1>
        <Paragraph style={{ marginBottom: 30 }}>
          There is no required fee, although you may make a donation if you’d
          like.
          <br />
          <br />
          Select the Domestic option for Indian bank/credit cards, or the
          International option for foreign bank/credit cards.
        </Paragraph>
        <Image
          src={""}
          rawHeight={450}
          rawWidth={450}
          className="icon"
          style={{
            height: 80,
            width: 80,
            display: "inline-block",
            background: "#4a4a4a",
            marginRight: 15,
          }}
        />
        <Image
          src={""}
          rawHeight={450}
          rawWidth={450}
          className="icon"
          style={{
            height: 80,
            width: 80,
            background: "#4a4a4a",
            display: "inline-block",
          }}
        />
      </div>
    );
  }
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default RCPracticeGroupSide;
