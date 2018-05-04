// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import indexOf from "lodash/indexOf";
import isNull from "lodash/isNull";
import filter from "lodash/filter";
import map from "lodash/map";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Image, HexaGrid as HexaGridX } from "@bodhi-project/components";
import { Article } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import dummy1 from "../assets/dummy1.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { HexaGrid, Hex } = HexaGridX;
const filterF = filter;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const componentStyle = css({
  "& .blank": {
    display: "none",
  },

  "& > div": {
    justifyContent: "flex-start !important",
  },

  "& .hex": {
    padding: 0,
    border: "unset !important",
    borderRadius: 8,
    marginBottom: 45,

    "@media (min-width: 768px)": {
      flex: "0 0 49%",
      maxWidth: "49%",
      WebkitFlex: "0 0 49%",
      marginRight: "1%",
    },

    "& .abstract": {
      padding: "9px 12px",
      marginBottom: 0,

      "& .title": {
        fontFamily: "futura-pt, sans-serif !important",
        fontWeight: 700,
        letterSpacing: "-0.08775ex",
      },

      "& .date": {
        fontFamily: "futura-pt, sans-serif !important",
      },

      "& .time": {
        fontFamily: "futura-pt, sans-serif !important",
      },
    },
  },
});
const componentStyleClass = componentStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** LearnMore */
class EventsGrid extends React.Component {
  /** standard renderer */
  render() {
    const { data, totalEvents, featured } = this.props;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);

    let filteredRecords = 1;
    const filtered = filterF(data, ({ node }) => {
      let includeThis = false;
      const { frontmatter } = node;
      const { tags, date, startDate } = frontmatter;
      const mDate = moment(!isNull(date) ? date : startDate);
      const xDate = parseInt(mDate.format("YYYYMMDD"), 10);

      const inTheFuture = todayInt <= xDate;
      const belowMax = totalEvents >= filteredRecords;
      const isFeatured = featured === true ? inArray(tags, "featured") : true;

      if (inTheFuture && belowMax && isFeatured) {
        includeThis = true;
        filteredRecords += 1;
      }
      return includeThis;
    });

    return (
      <div className={componentStyleClass}>
        <HexaGrid>
          {map(filtered, ({ node }, index) => {
            const { frontmatter } = node;
            const { fromTime, toTime, cover } = frontmatter;
            const { fields } = node;
            const { route, elapsed, humanDate } = fields;

            const content = (
              <div style={{ maxWidth: 300, padding: "0.5em" }}>
                <Link to={`/${route}`}>
                  <p className="abstract" style={{ marginBottom: 0 }}>
                    <span style={{ fontSize: "80%" }}>
                      {frontmatter.abstract}
                    </span>
                    <br />
                    <span style={{ fontSize: "80%" }}>
                      <i style={{ color: "#0000FF" }}>Click to read more…</i>
                    </span>
                  </p>
                </Link>
              </div>
            );

            return (
              <Hex className="hex" key={humanDate}>
                <Popover content={content} title={false} placement="leftTop">
                  <Link to={`/${route}`}>
                    <Article>
                      <Image
                        src={cover !== "fallback" ? cover : dummy1}
                        rawHeight={900}
                        rawWidth={1440}
                        className="cover"
                        style={{
                          height: "auto",
                          width: "100%",
                          border: 0,
                          borderRadius: 8,
                        }}
                        loader="gradient"
                      />
                      <p className="abstract">
                        <span className="title" style={{ fontSize: "90%" }}>
                          {frontmatter.title}
                        </span>
                        <br />
                        <span className="date" style={{ fontSize: "80%" }}>
                          <i>{humanDate}</i>
                        </span>
                        <br />
                        <span className="date" style={{ fontSize: "80%" }}>
                          <i>
                            {fromTime} - {toTime}
                          </i>
                        </span>
                      </p>
                    </Article>
                  </Link>
                </Popover>
              </Hex>
            );
          })}
        </HexaGrid>
      </div>
    );
  }
}

EventsGrid.propTypes = {};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default EventsGrid;
