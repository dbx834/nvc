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
import { LocaleProvider, Calendar, Popover, Badge } from "antd";
import en_GB from "antd/lib/locale-provider/en_GB";
import "moment/locale/en-gb";
import { Image } from "@bodhi-project/components";
import { Elements, applyRhythm, applyType } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Paragraph } = Elements;
const enGB = en_GB;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  ...applyRhythm({ maxWidth: "40X" }),
  "& .blank": {
    visibility: "hidden",
  },

  "& .cover": {
    zIndex: -1,
  },

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
    };
    this.onSelect = this.onSelect.bind(this);
  }

  /** componentDidMount - set current date */
  componentDidMount() {
    const today = moment();
    this.setState({ selectedDate: today });
  }

  /** logs date */
  onSelect(value, mode) {
    this.setState({ selectedDate: value });
  }

  /** standard renderer */
  render() {
    const { data } = this.props;

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

      _.map(data, ({ node }) => {
        const { frontmatter } = node;
        const { fields } = node;
        const { title } = frontmatter;
        const mDate = moment(frontmatter.date);
        const xDate = parseInt(mDate.format("YYYYMMDD"), 10);
        const humanDate = mDate.format("dddd, MMMM D, YYYY");
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

          const content = (
            <div>
              <Paragraph style={{ marginBottom: 0, padding: "9px 6px" }}>
                <span className="title" style={{ fontSize: "110%" }}>
                  {title}
                </span>
                <br />
                <small className="date">
                  <i>{humanDate}</i>
                </small>
                <br />
                <br />
                {frontmatter.abstract}
              </Paragraph>
            </div>
          );

          frag = (
            <div className={classNames}>
              <Popover content={content} title={false}>
                <Link to={route}>
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
    };

    return (
      <div className={pageStyleClass}>
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
