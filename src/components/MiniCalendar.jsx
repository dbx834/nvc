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
import { Image } from "@bodhi-project/components";
import { applyRhythm, applyType } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import LocaleProvider from "antd/lib/locale-provider";
import "antd/lib/locale-provider/style/css";

import Calendar from "antd/lib/calendar";
import "antd/lib/calendar/style/css";

import Tooltip from "antd/lib/tooltip";
import "antd/lib/tooltip/style/css";

import en_GB from "antd/lib/locale-provider/en_GB";
import "moment/locale/en-gb";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import nvc from "../assets/nvc.png";
import rc from "../assets/rc.png";
import featured from "../assets/featured.png";

import start from "../assets/start.png";
import middle from "../assets/middle.png";
import end from "../assets/end.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const enGB = en_GB;

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  position: "relative",
  marginBottom: 30,

  "& .ant-fullcalendar-header": {
    // width: 90 * 7,
    padding: "11px 0px",

    "& .ant-radio-group": {
      display: "none",
    },
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

  "& .ant-fullcalendar": {
    ...applyType("ltb1ekq"),

    "& .ant-fullcalendar-today": {
      "& div.date-block": {
        backgroundColor: "#fff0b4 !important",

        "& span": {
          color: "#B43808",
        },
      },
    },

    "& .ant-fullcalendar-calendar-body": {
      padding: 0,
      width: "100%",
      maxWidth: "100%",

      "& table": {
        "& thead": {
          borderTop: "1px solid #4a4a4a",
          borderBottom: "1px solid #4a4a4a",

          "& .ant-fullcalendar-column-header": {
            textAlign: "left",
            paddingTop: 6,
            paddingBottom: 6,
            "& span": {
              fontSize: "80%",
              fontWeight: 700,
              fontStyle: "italic",
            },
          },
        },
      },
    },

    "& table": {
      width: "100%",
      maxWidth: "100%",
    },

    "& tbody": {
      "& .ant-fullcalendar-cell": {
        position: "relative",
        width: "calc(100% / 7)",
        height: 50,
      },

      "& div.date-block": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 49,
        WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
        transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",

        "&:hover": {
          backgroundColor: "#FFDA9A",
        },

        "& > span": {
          display: "block",
          width: "100%",
          height: 49,
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
          width: "100%",
          height: 49,
          color: "inherit",

          "&:hover": {
            color: "inherit",
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

/** popContent */
const popContent = standardData => {
  const { title, humanDate, fromTime, toTime } = standardData;

  return (
    <div style={{ maxWidth: 300 }}>
      {title}
      <small
        className="date"
        style={{
          display: "block",
          fontSize: "70%",
          marginTop: 3,
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
          {fromTime} - {toTime}
        </i>
      </small>
    </div>
  );
};

/** getStandardData */
const getStandardData = ({ node }) => {
  const { frontmatter, fields } = node;
  const {
    title,
    fromTime,
    toTime,
    tags,
    date,
    startDate,
    finishDate,
    abstract,
  } = frontmatter;
  const { route, humanDate } = fields;

  const begins = moment(!_.isNull(startDate) ? startDate : date);
  const ends = moment(
    !_.isNull(finishDate) ? finishDate : begins.clone().add(23, "hours"),
  );
  const beginDateInt = parseInt(begins.format("YYYYMMDD"), 10);
  const diff = !_.isNull(finishDate)
    ? moment.duration(ends.diff(begins)).asDays()
    : 0;

  return {
    title,
    fromTime,
    toTime,
    tags,
    date,
    startDate,
    finishDate,
    route,
    begins,
    ends,
    beginDateInt,
    diff,
    humanDate,
    abstract,
  };
};

/** makeFrag */
const makeFrag = ({
  standardData,
  todayInt,
  thisDate,
  selectedMonth,
  thisMonth,
  day,
  multiDay,
}) => {
  const { tags, route, beginDateInt } = standardData;
  let badgeStatus = null;
  let classNames = "date-block";

  if (selectedMonth === thisMonth) {
    classNames += " this-month";
  } else {
    classNames += " that-month";
  }

  if (todayInt > beginDateInt) {
    classNames += " past-event";
    badgeStatus = "default";
  } else if (todayInt < beginDateInt) {
    classNames += " planned-event";
    badgeStatus = "warning";
  } else {
    classNames += " happening-event";
    badgeStatus = "success";
  }

  if (todayInt === thisDate) {
    classNames += " today";
  }

  const content = popContent(standardData);

  const frag = (
    <div className={classNames}>
      <Tooltip title={content}>
        <Link to={`/${route}`}>
          <span style={{ fontSize: "65%", position: "absolute" }}>{day}</span>
          <br />
          {inArray(tags, "nvc") && (
            <Image
              src={nvc}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 16,
                top: 18,
                zIndex: 2,
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
                height: 20,
                width: 20,
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 16,
                top: 18,
                zIndex: 2,
              }}
            />
          )}
          {inArray(tags, "featured") && (
            <Image
              src={featured}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: 20,
                width: 20,
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 16,
                top: 18,
                zIndex: 2,
              }}
            />
          )}
          {multiDay === true && (
            <Image
              src={start}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: "100%",
                width: "auto",
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
        </Link>
      </Tooltip>
    </div>
  );

  return frag;
};

/** makeMultiFrag */
const makeMultiFrag = ({
  standardData,
  todayInt,
  thisDate,
  selectedMonth,
  thisMonth,
  day,
  multiSpan,
}) => {
  const { route, beginDateInt } = standardData;
  let classNames = "date-block";

  if (selectedMonth === thisMonth) {
    classNames += " this-month";
  } else {
    classNames += " that-month";
  }

  if (todayInt > beginDateInt) {
    classNames += " past-event";
  } else if (todayInt < beginDateInt) {
    classNames += " planned-event";
  } else {
    classNames += " happening-event";
  }

  if (todayInt === thisDate) {
    classNames += " today";
  }

  const content = popContent(standardData);

  const frag = (
    <div className={classNames}>
      <Tooltip title={content}>
        <Link to={`/${route}`}>
          <span style={{ fontSize: "65%", position: "absolute" }}>{day}</span>
          <br />
          {multiSpan === 2 && (
            <Image
              src={middle}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: "100%",
                width: "auto",
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
          {multiSpan === 1 && (
            <Image
              src={end}
              rawHeight={450}
              rawWidth={450}
              className="icon"
              style={{
                height: "100%",
                width: "auto",
                position: "absolute",
                background: "transparent",
                border: 0,
                right: 0,
                top: 0,
                zIndex: 1,
              }}
            />
          )}
        </Link>
      </Tooltip>
    </div>
  );

  return frag;
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
      currentMonth: null,
      query: { filter: null },
    };
    this.onChange = this.onChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  /** componentWillReceiveProps - set current date */
  componentWillReceiveProps(nextProps) {
    const nextQuery = parseQueryString(
      nextProps.location ? nextProps.location.search : null,
    );
    if (!_.isEqual(nextQuery, this.state.query)) {
      this.setState({ query: nextQuery });
    }
  }

  /** logs date */
  onChange(value, mode) {
    this.setState({ currentMonth: value });
  }

  /** applyFilter */
  applyFilter(filter) {
    this.setState({ query: { filter: filter } });
  }

  /** standard renderer */
  render() {
    const { data, givenTags } = this.props;
    let uniqueTags = [];
    let displayTagsAs = {};
    let activeFilter = null;
    const todayInt = parseInt(moment().format("YYYYMMDD"), 10);
    const selectedMonth = moment().format("M");
    const urlQuery = parseQueryString(this.props.location.search);

    const thatMonth = _.isNull(this.state.currentMonth)
      ? moment()
      : this.state.currentMonth;
    const thatMonthF = thatMonth.format("YYYYMM");
    const lastMonthF = thatMonth
      .clone()
      .subtract(1, "month")
      .format("YYYYMM");
    const nextMonthF = thatMonth
      .clone()
      .add(1, "month")
      .format("YYYYMM");
    const monthFilter = [lastMonthF, thatMonthF, nextMonthF];

    let filteredData = null;
    const thisYear = moment().startOf("year");
    const nextYear = thisYear
      .clone()
      .add("1", "years")
      .endOf("year");

    // Get all unique tags
    if (_.isEmpty(givenTags)) {
      _.map(data, ({ node }) => {
        const { frontmatter } = node;
        const { tags } = frontmatter;
        _.map(tags, tag => {
          if (!inArray(uniqueTags, tag)) {
            uniqueTags.push(tag);
          }
        });
      });
    } else {
      uniqueTags = _.keys(givenTags);
    }

    if (!_.isEmpty(givenTags)) {
      displayTagsAs = givenTags;
    }

    const query = _.isNull(this.state.query.filter)
      ? urlQuery
      : this.state.query;
    const { filter } = query;
    // Filter data by tag
    if (filter) {
      activeFilter = filter;
      filteredData = _.filter(data, ({ node }) => {
        let displayThis = false;
        if (activeFilter === "all") {
          displayThis = true;
        } else if (inArray(node.frontmatter.tags, activeFilter)) {
          displayThis = true;
        }
        if (displayThis === true) {
          const { date, startDate } = node.frontmatter;
          const begins = moment(!_.isNull(startDate) ? startDate : date);
          const thisEventMonth = begins.format("YYYYMM");
          if (inArray(monthFilter, thisEventMonth)) {
            displayThis = true;
          } else {
            displayThis = false;
          }
        }
        return displayThis;
      });
    } else {
      filteredData = data;
    }

    let multiDay = false;
    let multiSpan = 0;
    let multiDayEvent = {};

    /** renders each date */
    const dateFullCellRender = value => {
      const day = value.format("D");
      const thisMonth = value.format("M");
      const thisDate = parseInt(value.format("YYYYMMDD"), 10);

      let classNames = "date-block";
      if (selectedMonth === thisMonth) {
        classNames += " this-month";
      } else {
        classNames += " that-month";
      }
      let frag = (
        <div className={classNames}>
          <span style={{ fontSize: "65%" }}>{day}</span>
        </div>
      );

      let record = null;
      if (multiDay === true) {
        record = multiDayEvent;
        const standardData = getStandardData(record);

        frag = makeMultiFrag({
          standardData,
          todayInt,
          thisDate,
          selectedMonth,
          thisMonth,
          day,
          multiSpan,
        });

        multiSpan -= 1;
        if (multiSpan === 0) {
          multiDay = false;
          multiDayEvent = {};
          multiDay = false;
        }
      } else if (!_.isNull(filteredData)) {
        record = _.filter(filteredData, ({ node }) => {
          let filterThis = false;
          const { frontmatter } = node;
          const { date, startDate } = frontmatter;
          const begins = moment(!_.isNull(startDate) ? startDate : date);
          const beginDateInt = parseInt(begins.format("YYYYMMDD"), 10);
          if (thisDate === beginDateInt) {
            filterThis = true;
          }
          return filterThis;
        });
        record = record[0];

        if (!_.isUndefined(record)) {
          const standardData = getStandardData(record);
          const { diff } = standardData;

          if (diff !== 0) {
            multiDay = true;
            multiSpan = diff;
            multiDayEvent = record;
          }

          frag = makeFrag({
            standardData,
            todayInt,
            thisDate,
            selectedMonth,
            thisMonth,
            day,
            multiDay,
          });
        }
      }

      return frag;
    };

    return (
      <div className={pageStyleClass}>
        <Link
          style={{ position: "absolute", top: 14 }}
          to="/upcoming-events?filter=all"
        >
          All events ⇝
        </Link>
        <LocaleProvider locale={enGB}>
          <Calendar
            dateFullCellRender={dateFullCellRender}
            onSelect={this.onSelect}
            onPanelChange={this.onChange}
            defaultValue={this.state.selectedDate}
            validRange={[thisYear, nextYear]}
            fullscreen={false}
          />
        </LocaleProvider>
      </div>
    );
  }
}

CalendarX.propTypes = {
  data: PropTypes.object,
  givenTags: PropTypes.object,
};

CalendarX.defaultProps = {
  givenTags: [],
};

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default CalendarX;
