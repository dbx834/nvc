// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import { css } from "glamor";
import _ from "lodash";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Tooltip } from "antd";
import { Image, HexaGrid as HexaGridX } from "@bodhi-project/components";
import { Elements } from "@bodhi-project/typography";
import { Article } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import deepening from "../assets/deepening.png";
import introduction from "../assets/introduction.png";
import practiceGroup from "../assets/practiceGroup.png";
import webinar from "../assets/webinar.png";
import workshop from "../assets/workshop.png";
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import dummy1 from "../assets/dummy1.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { HexaGrid, Hex } = HexaGridX;
const { Paragraph } = Elements;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------
/** inArray */
const inArray = (array, value) => {
  let rx = false;
  if (_.indexOf(array, value) >= 0) {
    rx = true;
  }
  return rx;
};

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const componentStyle = css({
  "& .hex": {
    padding: 0,
    border: "1px solid #4a4a4a !important",
    borderRadius: 8,
    background: "#f6f2f8",
    marginBottom: 30,

    "& ul.event-icons": {
      listStyle: "none",
      padding: 0,
      position: "absolute",
      top: 0,
      right: 0,
      zIndex: 1,

      "& li": {
        margin: "0 !important",
        display: "inline-block",

        "& .icon": {
          border: 0,
          marginTop: 2,
          marginRight: 2,
        },
      },
    },

    "@media (min-width: 768px)": {
      flex: "0 0 32.333%",
      maxWidth: "32.333%",
      WebkitFlex: "0 0 32.333%",
      marginRight: "1%",
      marginBottom: "1%",
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
    const { data, totalEvents } = this.props;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);

    let filteredRecords = 1;
    const filtered = _.filter(data, ({ node }) => {
      let includeThis = false;
      const { frontmatter } = node;
      const mDate = moment(frontmatter.date);
      const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
      if (todayInt <= xDate && totalEvents >= filteredRecords) {
        includeThis = true;
        filteredRecords += 1;
      }
      return includeThis;
    });

    return (
      <div className={componentStyleClass}>
        <HexaGrid id="events-grid">
          {_.map(filtered, ({ node }, index) => {
            const { frontmatter } = node;
            const mDate = moment(frontmatter.date);
            const humanDate = mDate.format("dddd, MMMM D, YYYY");
            const { tags } = frontmatter;
            const when = moment(mDate).fromNow();
            const { fields } = node;
            const { route } = fields;
            const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
            // console.log(frontmatter, todayInt <= xDate);
            if (todayInt <= xDate) {
              return (
                <Hex className="hex" key={humanDate}>
                  <Article>
                    <ul className="event-icons">
                      {inArray(tags, "nvc") && (
                        <li>
                          <Tooltip title="Nonviolent Communication">
                            <div>
                              <Image
                                src={nvc}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "rc") && (
                        <li>
                          <Tooltip title="Restorative Circle">
                            <div>
                              <Image
                                src={rc}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "introduction") && (
                        <li>
                          <Tooltip title="Introduction">
                            <div>
                              <Image
                                src={introduction}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "deepening") && (
                        <li>
                          <Tooltip title="Deepening">
                            <div>
                              <Image
                                src={deepening}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "workshop") && (
                        <li>
                          <Tooltip title="Workshop">
                            <div>
                              <Image
                                src={workshop}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "practice group") && (
                        <li>
                          <Tooltip title="Practice group">
                            <div>
                              <Image
                                src={practiceGroup}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                      {inArray(tags, "webinar") && (
                        <li>
                          <Tooltip title="Webinar">
                            <div>
                              <Image
                                src={webinar}
                                rawHeight={450}
                                rawWidth={450}
                                className="icon"
                                style={{
                                  height: 30,
                                  width: 30,
                                  background: "transparent",
                                }}
                              />
                            </div>
                          </Tooltip>
                        </li>
                      )}
                    </ul>
                    <Image
                      src={dummy1}
                      rawHeight={1400}
                      rawWidth={2100}
                      className="cover"
                      style={{
                        height: "auto",
                        width: "100%",
                        border: 0,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                      loader="gradient"
                    />
                    <Paragraph className="abstract">
                      <Tooltip title={when} placement="topLeft">
                        <span className="title" style={{ fontSize: "110%" }}>
                          {frontmatter.title}
                        </span>
                        <br />
                        <small className="date">
                          <i>{humanDate}</i>
                        </small>
                      </Tooltip>
                      <br />
                      <br />
                      {frontmatter.abstract}
                      <br />
                      <br />
                      <small className="readmore">
                        <Link to={route}>Read more ⇾</Link>
                      </small>
                    </Paragraph>
                  </Article>
                </Hex>
              );
            }
          })}
          {_.map(_.times(3 - totalEvents % 3, String), x => {
            return (
              <Hex className="hex blank" key={x}>
                <div>&nbsp;</div>
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
