// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { LocaleProvider, Calendar, Popover, Badge, Button } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import "moment/locale/en-gb";
import { Image } from "@bodhi-project/components";
import { Elements, applyRhythm, applyType } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import packageJson from "../../package.json";
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { Paragraph } = Elements;
const enGB = en_GB;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  "& .ant-fullcalendar-fullscreen": {
    "& .ant-fullcalendar-header": {
      width: 90 * 7,
      padding: "11px 0px",
    },

    "& .ant-fullcalendar-year-select": {
      ...applyType("ltb1ekq"),
      "& .ant-select-selection": {
        fontSize: "80%",
        backgroundColor: "transparent",
        border: "none",
      },
    },

    "& .ant-fullcalendar-month-select": {
      ...applyType("ltb1ekq"),
      "& .ant-select-selection": {
        fontSize: "80%",
        backgroundColor: "transparent",
        border: "none",
      },
    },

    "& .ant-radio-group": {
      display: "none",
    },
  },

  "& .ant-fullcalendar": {
    ...applyType("ltb1ekq"),

    "& .ant-fullcalendar-calendar-body": {
      padding: 0,
      width: "fit-content",
      maxWidth: "fit-content",

      "& table": {
        "& thead": {
          borderTop: "1px solid #4a4a4a",
          borderBottom: "1px solid #4a4a4a",

          "& .ant-fullcalendar-column-header": {
            textAlign: "left",
            paddingTop: 6,
            paddingBottom: 6,
            "& span": {
              fontWeight: 700,
              fontStyle: "italic",
            },
          },
        },
      },
    },

    "& table": {
      width: "unset",
      maxWidth: "unset",
    },

    "& tbody": {
      "& .ant-fullcalendar-cell": {
        position: "relative",
        width: 90,
        height: 90,
      },

      "& div.date-block": {
        position: "absolute",
        top: 0,
        left: 0,
        width: 89,
        height: 89,
        WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",

        "&:hover": {
          backgroundColor: "#FFDA9A",
        },

        "& > span": {
          display: "block",
          width: 88,
          height: 89,
        },

        "& .ant-badge": {
          fontFamily: "inherit",
          fontSize: "inherit",
          "& .ant-badge-dot": {
            top: 4,
            height: 8,
            width: 8,
            transform: "translateX(-10%)",
          },
        },

        "& a": {
          display: "block",
          height: 89,
          width: 89,

          "&:hover": {
            color: "#6D00FF",
            borderBottom: "1.625px solid transparent",
          },
        },
      },

      "& div.this-month": {
        backgroundColor: "#fff5cd",
      },

      "& div.that-month": {
        backgroundColor: "#F6F4FE",
      },

      "& tr": {
        "& td": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%), linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "bottom, right",
            backgroundSize: "4.45px 1px, 1px 4.45px",
            backgroundRepeat: "repeat-x, repeat-y",
          },
        },

        "& td:last-child": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to right, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "bottom",
            backgroundSize: "4.45px 1px",
            backgroundRepeat: "repeat-x",
          },
        },
      },

      "& tr:last-child": {
        "& td": {
          "& div.date-block": {
            backgroundImage:
              "linear-gradient(to bottom, #4a4a4a 30%, rgba(74, 74, 74, 0) 0%)",
            backgroundPosition: "right",
            backgroundSize: "1px 4.45px",
            backgroundRepeat: "repeat-y",
          },
        },

        "& td:last-child": {
          "& div.date-block": {
            backgroundImage: "none",
          },
        },
      },
    },
  }, // B43808

  "& .ant-btn": _.merge(
    { ...applyType("ltb1ekq") },
    {
      fontWeight: 700,
      fontStyle: "italic",
      borderRadius: 0,
      backgroundColor: "#FFFFFF",
      borderColor: "#B43808",
      color: "#B43808 !important",
      height: "auto",
      transition: "all 200ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
      "&:not(:last-child)": {
        marginRight: "10px",
      },

      "&:hover": {
        backgroundColor: "#B43808 !important",
        color: "#FFFFFF !important",
        borderColor: "transparent",
        transform: "scale(1.1)",
      },

      "& span": {
        fontSize: "90%",
      },
    },
    ...applyRhythm({ padding: "0X 0.65X" }),
  ),

  "& .ant-btn-primary": {
    backgroundColor: "#B43808",
    color: "#FFFFFF !important",
    borderColor: "transparent",

    "&:hover": {
      backgroundColor: "#B43808 !important",
      transform: "scale(1.05)",
    },
  },
});
const pageStyleClass = pageStyle.toString();

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

/** parseQueryString */
const parseQueryString = string => {
  const objURL = {};

  string.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), ($0, $1, $2, $3) => {
    objURL[$1] = $3;
  });

  return objURL;
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Calendar */
class CalendarX extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      query: { filter: null },
    };
    this.onSelect = this.onSelect.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  /** componentDidMount - set current date */
  componentDidMount() {
    const today = moment();
    const query = parseQueryString(this.props.location.search);
    this.setState({ selectedDate: today, query: query });
  }

  /** componentDidMount - set current date */
  shouldComponentUpdate(nextProps, nextState) {
    const nextQuery = parseQueryString(nextProps.location.search);
    const urlQueryDifferent = !_.isEqual(nextQuery, this.state.query);
    if (urlQueryDifferent) {
      this.setState({ query: nextQuery });
    }
    return true;
  }

  /** logs date */
  onSelect(value, mode) {
    // this.setState({ selectedDate: value });
  }

  /** applyFilter */
  applyFilter(filter) {
    this.setState({ query: { filter: filter } });
  }

  /** standard renderer */
  render() {
    const { data } = this.props;
    const uniqueTags = [];
    let activeFilter = null;

    // Get all unique tags
    _.map(data, ({ node }) => {
      const { frontmatter } = node;
      const { tags } = frontmatter;
      _.map(tags, tag => {
        if (!inArray(uniqueTags, tag)) {
          uniqueTags.push(tag);
        }
      });
    });

    // Filter data by tag
    let filteredData = null;
    if (!_.isNull(this.state.query.filter)) {
      activeFilter = this.state.query.filter;
      filteredData = _.filter(data, ({ node }) => {
        let displayThis = false;
        if (inArray(node.frontmatter.tags, activeFilter)) {
          displayThis = true;
        }
        return displayThis;
      });
    } else {
      filteredData = data;
    }

    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    const selectedMonth =
      !_.isNull(this.state.selectedDate) && this.state.selectedDate.format("M");

    /** renders each date */
    const dateFullCellRender = value => {
      // console.log(value);
      const day = value.format("D");
      const thisMonth = value.format("M");
      const thisDate = parseInt(value.format("YYYYMMDD"), 10);
      let classNames = "date-block";

      if (selectedMonth === thisMonth) {
        classNames += " this-month";
      } else {
        classNames += " that-month";
      }
      let frag = <div className={classNames}>{day}</div>;

      if (!_.isNull(filteredData)) {
        _.map(filteredData, ({ node }) => {
          const { frontmatter } = node;
          const { fields } = node;
          const { title } = frontmatter;
          const mDate = moment(frontmatter.date);
          const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
          const humanDate = mDate.format("dddd, MMMM D, YYYY");
          const { fromTime, toTime } = frontmatter;
          let badgeStatus = null;
          // const when = moment(mDate).fromNow();
          const { route } = fields;
          const { tags } = frontmatter;

          if (thisDate === xDate) {
            if (todayInt > xDate) {
              classNames += " past-event";
              badgeStatus = "default";
            } else if (todayInt < xDate) {
              classNames += " planned-event";
              badgeStatus = "warning";
            } else {
              classNames += " happening-event";
              badgeStatus = "success";
            }

            if (todayInt === thisDate) {
              classNames += " today";
            }

            const content = (
              <div style={{ maxWidth: 300, padding: "0.5em" }}>
                <Paragraph style={{ marginBottom: 0 }}>
                  <strong
                    style={{
                      display: "block",
                      borderBottom: "1px solid #4a4a4a",
                      fontSize: "90%",
                    }}
                  >
                    {title}
                  </strong>
                  <small
                    className="date"
                    style={{
                      display: "block",
                      fontSize: "70%",
                      marginTop: -2,
                    }}
                  >
                    <i>{humanDate}</i>
                  </small>
                  <small
                    className="time"
                    style={{
                      display: "block",
                      fontSize: "70%",
                      marginTop: -2,
                    }}
                  >
                    <i>
                      {fromTime} – {toTime}
                    </i>
                  </small>
                  <span
                    style={{
                      display: "block",
                      fontSize: "80%",
                      marginTop: 10,
                    }}
                    className="abstract"
                  >
                    {frontmatter.abstract}
                  </span>
                  <small
                    style={{
                      display: "block",
                      fontSize: "70%",
                      marginTop: 10,
                    }}
                    className="readmore"
                  >
                    <Link to={`/${route}`}>Read more ⇾</Link>
                  </small>
                </Paragraph>
              </div>
            );

            frag = (
              <div className={classNames}>
                <Popover content={content} title={false}>
                  <Link to={`/${route}`}>
                    <Badge status={badgeStatus}>{day}</Badge>
                    <br />
                    {inArray(tags, "nvc") && (
                      <Image
                        src={nvc}
                        rawHeight={450}
                        rawWidth={450}
                        className="icon"
                        style={{
                          height: 45,
                          width: 45,
                          position: "absolute",
                          background: "transparent",
                          border: 0,
                          right: 3,
                          top: 3,
                        }}
                      />
                    )}
                    {inArray(tags, "rc") && (
                      <Image
                        src={rc}
                        rawHeight={450}
                        rawWidth={450}
                        className="icon"
                        style={{
                          height: 45,
                          width: 45,
                          position: "absolute",
                          background: "transparent",
                          border: 0,
                          right: 3,
                          top: 3,
                        }}
                      />
                    )}
                  </Link>
                </Popover>
              </div>
            );
          }
        });
        return frag;
      }
    };

    return (
      <div className={pageStyleClass}>
        {_.map(uniqueTags, tag => {
          let filterName = tag;
          if (tag === "nvc" || tag === "rc") {
            filterName = "all";
          } else {
            filterName = _.capitalize(tag);
          }
          return (
            <Fragment>
              {activeFilter === tag ? (
                <Button type="primary" onClick={() => this.applyFilter(tag)}>
                  <span>{tag}</span>
                </Button>
              ) : (
                <Button onClick={() => this.applyFilter(tag)}>
                  <span>{tag}</span>
                </Button>
              )}
            </Fragment>
          );
        })}
        <LocaleProvider locale={enGB}>
          <Calendar
            dateFullCellRender={dateFullCellRender}
            onSelect={this.onSelect}
            defaultValue={this.state.selectedDate}
          />
        </LocaleProvider>
      </div>
    );
  }
}

CalendarX.propTypes = {
  data: PropTypes.object,
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default CalendarX;
